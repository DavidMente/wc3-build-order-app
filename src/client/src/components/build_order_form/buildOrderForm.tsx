import React, {FunctionComponent, useEffect} from 'react';
import {BuildOrderLayout} from '../build_order/buildOrderLayout';
import RaceSelect from './raceSelect';
import ActionGrid from '../actions/actionGrid';
import {RootState} from '../../store';
import {fetchBuildOrderForm, resetBuildOrderForm} from '../../store/build_order_form/actions';
import {connect, ConnectedProps} from 'react-redux';
import {RouteComponentProps, withRouter} from 'react-router';
import SaveBuildOrder from './saveBuildOrder';
import {BuildOrderTaskComponent} from '../build_order/buildOrderTaskComponent';
import EditBuildOrderMetadata from './editBuildOrderMetadata';
import DeleteBuildOrder from './deleteBuildOrder';
import {LoadStatus} from '../../store/common/types';

const mapState = (state: RootState) => {
    return {
        buildOrder: {
            ...state.buildOrderForm,
            tasks: state.buildOrderForm.tasks,
        },
        isLoading: state.buildOrderForm.loadStatus === LoadStatus.LOADING,
    };
};

const mapDispatch = {
    fetchData: (id: number) => fetchBuildOrderForm(id),
    resetForm: () => resetBuildOrderForm(),
};

const connector = connect(
    mapState,
    mapDispatch,
);

type BuildOrderFormProps = ConnectedProps<typeof connector> & RouteComponentProps<any>

const BuildOrderForm: FunctionComponent<BuildOrderFormProps> =
    ({buildOrder, fetchData, resetForm, match, isLoading}) => {

        useEffect(() => {
            if (match.params.id) {
                fetchData(match.params.id);
            } else {
                resetForm();
            }
        }, [match.params.id, fetchData, resetForm]);

        return isLoading ? <div className={'button is-loading'}/> : <BuildOrderLayout
            header={
                <div>
                    <div className={'box'}>
                        <EditBuildOrderMetadata isNewBuildOrder={buildOrder._id === undefined}/>
                    </div>
                    <div className={'box'}>
                        <RaceSelect/>
                    </div>
                </div>
            }
            actions={
                <ActionGrid/>
            }
            buildOrder={
                <div>
                    {buildOrder.tasks.map((task, index) =>
                        <BuildOrderTaskComponent
                            indentation={task.indentation}
                            key={task.id} id={task.id}
                            actionCode={task.actionCode}
                            description={task.description}
                            editMode={true}
                            isFirst={index === 0}
                            isLast={index === buildOrder.tasks.length - 1}
                        />)}
                </div>
            }
            summary={
                <div>
                    {buildOrder.tasks.length > 0 ? <SaveBuildOrder/> : ''}
                    {buildOrder._id !== undefined ? <DeleteBuildOrder/> : ''}
                    {Object.keys(buildOrder.errors).length > 0 ?
                        <p className={'help is-danger'}>There are form or password errors!</p> : ''}
                </div>
            }/>;
    };

export default connector(withRouter(BuildOrderForm));
