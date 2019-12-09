import React, {FunctionComponent, useEffect} from 'react';
import {fetchBuildOrders} from '../../store/build_orders/actions';
import {connect, ConnectedProps} from 'react-redux';
import {BuildOrderOverview} from './buildOrderOverview';
import {RootState} from '../../store';
import {BuildOrdersParams} from '../../store/build_orders/types';
import BuildOrdersSearch from './buildOrdersSearch';
import BuildOrdersRaceFilter from './buildOrdersRaceFilter';
import BuildOrdersSorting from './buildOrdersSorting';

const mapState = (rootState: RootState) => {
    return {
        buildOrders: rootState.buildOrders.buildOrders,
        params: rootState.buildOrders.params,
    };
};

const mapDispatch = {
    fetchData: (params: BuildOrdersParams) => fetchBuildOrders(params),
};

const connector = connect(mapState, mapDispatch);

const BuildOrdersComponent: FunctionComponent<ConnectedProps<typeof connector>> =
    ({buildOrders = [], fetchData, params}) => {

        useEffect(() => {
            fetchData(params);
        }, [fetchData, params]);

        return <div>
            <div className={'columns is-mobile'}>
                <div className={'column is-narrow'}>
                    <BuildOrdersSearch/>
                </div>
                <div className={'column is-narrow'}>
                    <BuildOrdersRaceFilter/>
                </div>
                <div className={'column is-narrow'}>
                    <BuildOrdersSorting/>
                </div>
            </div>
            {buildOrders.map((buildOrder) => <BuildOrderOverview key={buildOrder._id} id={buildOrder._id}
                                                                 name={buildOrder.name}
                                                                 description={buildOrder.description}
                                                                 race={buildOrder.race}
                                                                 author={buildOrder.author}
                                                                 views={buildOrder.views}
            />)}
            {buildOrders.length === 0 ? <div className={'info'}>No results found</div> : ''}
        </div>;

    };

export default connector(BuildOrdersComponent);
