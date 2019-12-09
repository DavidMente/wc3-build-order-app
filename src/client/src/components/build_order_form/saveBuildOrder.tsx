import React, {FunctionComponent} from 'react';
import {saveBuildOrder} from '../../store/build_order_form/actions';
import {connect} from 'react-redux';
import {RootState} from '../../store';
import {BuildOrderForm} from '../../store/build_order_form/types';

interface SaveBuildOrderProps {
    handleClick: (buildOrder: BuildOrderForm) => void,
    buildOrder: BuildOrderForm,
}

const mapState = (state: RootState) => {
    return {
        buildOrder: state.buildOrderForm,
    };
};

const mapDispatch = {
    handleClick: (bo: BuildOrderForm) => saveBuildOrder(bo),
};

const SaveBuildOrder: FunctionComponent<SaveBuildOrderProps> = ({buildOrder, handleClick}) =>
    <button className={'button is-success'} onClick={() => handleClick(buildOrder)}>Save build order</button>;

export default connect(mapState, mapDispatch)(SaveBuildOrder);
