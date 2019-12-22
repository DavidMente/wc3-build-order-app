import {
    BuildOrdersActionTypes,
    BuildOrderSort,
    BuildOrdersParams,
    SET_BUILD_ORDERS,
    SET_BUILD_ORDERS_LOAD_STATUS,
    SET_BUILD_ORDERS_RACE,
    SET_BUILD_ORDERS_SEARCH,
    SET_BUILD_ORDERS_SORT,
} from './types';
import {BuildOrderApi} from '../../api/buildOrderApi';
import {Dispatch} from 'redux';
import {BuildOrder, LoadStatus, Race} from '../common/types';
import {SettingsRepository} from '../../local_storage/SettingsRepository';

export const fetchBuildOrders = (params: BuildOrdersParams) => async (dispatch: Dispatch) => {
    dispatch(setBuildOrdersLoadStatus(LoadStatus.LOADING));
    const response = await BuildOrderApi.getBuildOrders(params);
    if (response.status === 200) {
        dispatch(setBuildOrders(response.data));
    }
    dispatch(setBuildOrdersLoadStatus(LoadStatus.LOADED));
};

export function setBuildOrders(buildOrders: BuildOrder[]): BuildOrdersActionTypes {
    return {
        type: SET_BUILD_ORDERS,
        payload: buildOrders,
    };
}

export function setBuildOrdersSearch(search: string | null): BuildOrdersActionTypes {
    return {
        type: SET_BUILD_ORDERS_SEARCH,
        payload: search,
    };
}

export function setBuildOrdersRace(race: Race | null): BuildOrdersActionTypes {
    SettingsRepository.saveSelectedRace(race);
    return {
        type: SET_BUILD_ORDERS_RACE,
        payload: race,
    };
}

export function setBuildOrdersSort(sort: BuildOrderSort): BuildOrdersActionTypes {
    SettingsRepository.saveSortBy(sort);
    return {
        type: SET_BUILD_ORDERS_SORT,
        payload: sort,
    };
}

export function setBuildOrdersLoadStatus(loadStatus: LoadStatus): BuildOrdersActionTypes {
    return {
        type: SET_BUILD_ORDERS_LOAD_STATUS,
        payload: loadStatus,
    };
}
