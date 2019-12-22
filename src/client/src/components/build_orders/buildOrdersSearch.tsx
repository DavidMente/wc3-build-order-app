import React, {FunctionComponent} from 'react';
import {RootState} from '../../store';
import {connect, ConnectedProps} from 'react-redux';
import {setBuildOrdersSearch} from '../../store/build_orders/actions';
import {DebounceInput} from 'react-debounce-input';

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
        <DebounceInput className={'input'} value={search || ''} placeholder={'Search'} debounceTimeout={300}
                       onChange={(event: React.ChangeEvent<HTMLInputElement>) => filter(event.target.value)}/>
    </div>;

export default connector(BuildOrdersSearch);
