import React, {FunctionComponent} from 'react';
import {RootState} from '../../store';
import {connect, ConnectedProps} from 'react-redux';
import {setBuildOrdersSearch} from '../../store/build_orders/actions';

const mapState = (state: RootState) => {
    return {
        search: state.buildOrders.params.search,
    };
};

const mapDispatch = {
    filter: (search: string | null) => setBuildOrdersSearch(search),
};

const connector = connect(mapState, mapDispatch);

const BuildOrdersSearch: FunctionComponent<ConnectedProps<typeof connector>> = ({search, filter}) =>
    <div className='field'>
        <input className={'input'} value={search || ''} placeholder={'Search'}
               onChange={(event: React.ChangeEvent<HTMLInputElement>) => filter(event.target.value)}/>
    </div>;

export default connector(BuildOrdersSearch);
