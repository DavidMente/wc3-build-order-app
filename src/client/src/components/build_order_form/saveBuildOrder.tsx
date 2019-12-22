import React, {FunctionComponent} from 'react';
import {saveBuildOrder} from '../../store/build_order_form/actions';
import {connect} from 'react-redux';
import {RootState} from '../../store';
import {BuildOrderForm} from '../../store/build_order_form/types';
import {LoadStatus} from '../../store/common/types';

interface SaveBuildOrderProps {
    handleClick: (buildOrder: BuildOrderForm) => void,
    buildOrder: BuildOrderForm,
    isLoading: boolean,
}

const mapState = (state: RootState) => {
    return {
        buildOrder: state.buildOrderForm,
        isLoading: state.buildOrderForm.loadStatus === LoadStatus.SAVING,
    };
};

const mapDispatch = {
    handleClick: (bo: BuildOrderForm) => saveBuildOrder(bo),
};

const SaveBuildOrder: FunctionComponent<SaveBuildOrderProps> = ({buildOrder, handleClick, isLoading}) =>
    <button className={'button is-success ' + (isLoading ? 'is-loading' : '')}
            onClick={() => handleClick(buildOrder)}>Save build order</button>;

export default connect(mapState, mapDispatch)(SaveBuildOrder);
