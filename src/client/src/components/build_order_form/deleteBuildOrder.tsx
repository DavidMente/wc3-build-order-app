import React, {FunctionComponent} from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {deleteBuildOrder} from '../../store/build_order_form/actions';
import {RootState} from '../../store';

const mapState = (state: RootState) => {
    return {
        buildOrderId: state.buildOrderForm._id,
        password: state.buildOrderForm.password,
    };
};

const mapDispatch = {
    handleClick: (buildOrderId: number, password: string) => deleteBuildOrder(buildOrderId, password),
};

const connector = connect(mapState, mapDispatch);

const DeleteBuildOrder: FunctionComponent<ConnectedProps<typeof connector>> = ({buildOrderId, password, handleClick}) =>
    buildOrderId !== undefined ?
        <button className={'button is-danger is-pulled-right'}
                onClick={() => handleClick(buildOrderId, password || '')}>Delete build order</button>
        : <span/>;

export default connector(DeleteBuildOrder);
