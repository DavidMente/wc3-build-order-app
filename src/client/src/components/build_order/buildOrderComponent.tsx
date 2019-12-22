import React, {FunctionComponent, useEffect} from 'react';
import {BuildOrderTaskComponent} from './buildOrderTaskComponent';
import {RootState} from '../../store';
import {connect, ConnectedProps} from 'react-redux';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {fetchBuildOrder} from '../../store/build_order/actions';
import {BuildOrderLayout} from './buildOrderLayout';
import {BuildOrderTask} from '../../store/build_order_form/types';
import slugify from 'slugify';
import {BuildOrderHeader} from './buildOrderHeader';

const mapState = (state: RootState) => {
    return {
        buildOrder: {
            ...state.buildOrder,
            tasks: state.buildOrder.tasks,
        },
    };
};

const mapDispatch = {
    fetchData: (id: number) => fetchBuildOrder(id),
};

const connector = connect(
    mapState,
    mapDispatch,
);

type BuildOrderFormProps = ConnectedProps<typeof connector> & RouteComponentProps<any>

const BuildOrderComponent: FunctionComponent<BuildOrderFormProps> =
    ({buildOrder, fetchData, match, location}) => {

        useEffect(() => {
            if (match.params.id) {
                fetchData(match.params.id);
            }
        }, [match.params.id, fetchData]);

        const isEmbedded = new URLSearchParams(location.search).get('embedded') === '1';
        const embeddingUrl = [process.env.REACT_APP_BASE_URL, 'build_order', buildOrder._id,
            slugify(buildOrder.name || '') + '?embedded=1'].join('/');
        const embeddingCode = '<iframe src="' + embeddingUrl + '" width="600" height="700" style="border: 0"/>';
        const handleFocus = (event: React.FocusEvent<HTMLTextAreaElement>) => {
            event.target.select();
            document.execCommand('copy');
        };

        return <BuildOrderLayout
            header={
                <div>
                    <div className={'box'}>
                        <BuildOrderHeader name={buildOrder.name} race={buildOrder.race} author={buildOrder.author}
                                          views={buildOrder.views}/>
                        <p className={'paragraph'}>{buildOrder.description}</p>
                    </div>
                    {!isEmbedded ? <div className={'box is-hidden-mobile'}>
                        <h2 className={'title is-5'}><i className='fas fa-code'/> Embed</h2>
                        <textarea value={embeddingCode} className={'textarea has-background-light embedding-box'}
                                  onFocus={handleFocus} rows={3}/>
                    </div> : ''}
                </div>
            }
            buildOrder={
                <div>
                    {buildOrder.tasks.map((task: BuildOrderTask) =>
                        <BuildOrderTaskComponent
                            indentation={task.indentation}
                            key={task.id} id={task.id}
                            actionCode={task.actionCode}
                            description={task.description}
                            editMode={false}/>,
                    )}
                </div>
            }
            summary={
                <div/>
            }
        />;

    };

export default connector(withRouter(BuildOrderComponent));
