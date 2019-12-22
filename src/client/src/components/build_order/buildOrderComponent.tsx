import React, {FunctionComponent, useEffect} from 'react';
import {BuildOrderTaskComponent} from './buildOrderTaskComponent';
import {RootState} from '../../store';
import {connect, ConnectedProps} from 'react-redux';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {fetchBuildOrder} from '../../store/build_order/actions';
import {BuildOrderLayout} from './buildOrderLayout';
import slugify from 'slugify';
import {BuildOrderHeader} from './buildOrderHeader';
import EditBuildOrderButton from './editBuildOrderButton';
import {LoadStatus} from '../../store/common/types';

const mapState = (state: RootState) => {
    return {
        buildOrder: {
            ...state.buildOrder,
            tasks: state.buildOrder.tasks,
        },
        isLoading: state.buildOrder.loadStatus === LoadStatus.LOADING,
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
    ({buildOrder, fetchData, match, location, isLoading}) => {

        useEffect(() => {
            if (match.params.id) {
                fetchData(match.params.id);
            }
        }, [match.params.id, fetchData]);

        const isEmbedded = new URLSearchParams(location.search).get('embedded') === '1';
        const url = [process.env.REACT_APP_BASE_URL, 'build_order', buildOrder._id,
            slugify(buildOrder.name || '')].join('/');
        const embeddingUrl = url + '?embedded=1';
        const embeddingCode = '<iframe src="' + embeddingUrl + '" width="600" height="700" style="border: 0"/>';
        const handleFocus = (event: React.FocusEvent<HTMLTextAreaElement>) => {
            event.target.select();
            document.execCommand('copy');
        };

        return isLoading ? <div className={'button is-loading'}/> : <BuildOrderLayout
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
                                  onFocus={handleFocus} rows={3} readOnly={true}/>
                    </div> : ''}
                </div>
            }
            buildOrder={
                <div>
                    {buildOrder.tasks.map((task, index) =>
                        <BuildOrderTaskComponent
                            indentation={task.indentation}
                            key={task.id} id={task.id}
                            actionCode={task.actionCode}
                            description={task.description}
                            editMode={false}
                            isFirst={index === 0}
                            isLast={index === buildOrder.tasks.length - 1}
                        />,
                    )}
                </div>
            }
            summary={
                <div>
                    {!isEmbedded ? <EditBuildOrderButton buildOrderId={buildOrder._id || 0}
                                                         buildOrderName={buildOrder.name || ''}/> :
                        <a href={url}>Open in website</a>}
                </div>
            }
        />;

    };

export default connector(withRouter(BuildOrderComponent));
