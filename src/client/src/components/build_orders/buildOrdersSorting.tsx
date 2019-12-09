import React, {FunctionComponent} from 'react';
import {RootState} from '../../store';
import {connect, ConnectedProps} from 'react-redux';
import {setBuildOrdersSort} from '../../store/build_orders/actions';
import {BuildOrderSort} from '../../store/build_orders/types';

const mapState = (state: RootState) => {
    return {
        sortBy: state.buildOrders.params.sortBy,
    };
};

const mapDispatch = {
    sort: (sortBy: BuildOrderSort) => setBuildOrdersSort(sortBy),
};

const connector = connect(mapState, mapDispatch);

const BuildOrdersSorting: FunctionComponent<ConnectedProps<typeof connector>> = ({sortBy, sort}) =>
    <div className={'field'}>
        <div className='select'>
            <select className={'select'} value={sortBy} onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                const sortField = event.target.value === BuildOrderSort.ID ? BuildOrderSort.ID : BuildOrderSort.VIEWS;
                sort(sortField);
            }}>
                <option value={BuildOrderSort.ID}>Most recent</option>
                <option value={BuildOrderSort.VIEWS}>Most views</option>
            </select>
        </div>
    </div>;

export default connector(BuildOrdersSorting);
