import {BuildOrder, LoadStatus, Race} from '../common/types';

export interface BuildOrdersState {
    buildOrders: BuildOrder[],
    params: BuildOrdersParams,
    loadStatus: LoadStatus,
}

export enum BuildOrderSort {
    VIEWS = 'views',
    ID = 'id',
}

export interface BuildOrdersParams {
    search: string | null,
    race: Race | null,
    sortBy: BuildOrderSort,
}

export const SET_BUILD_ORDERS = 'SET_BUILD_ORDERS';
export const SET_BUILD_ORDERS_SEARCH = 'SET_BUILD_ORDERS_SEARCH';
export const SET_BUILD_ORDERS_RACE = 'SET_BUILD_ORDERS_RACE';
export const SET_BUILD_ORDERS_SORT = 'SET_BUILD_ORDERS_SORT';
export const SET_BUILD_ORDERS_LOAD_STATUS = 'SET_BUILD_ORDERS_LOAD_STATUS';

interface SetBuildOrders {
    type: typeof SET_BUILD_ORDERS,
    payload: BuildOrder[],
}

interface SetBuildOrdersSearch {
    type: typeof SET_BUILD_ORDERS_SEARCH,
    payload: string | null,
}

interface SetBuildOrdersRace {
    type: typeof SET_BUILD_ORDERS_RACE,
    payload: Race | null,
}

interface SetBuildOrdersSort {
    type: typeof SET_BUILD_ORDERS_SORT,
    payload: BuildOrderSort,
}

interface SetBuildOrdersLoadStatus {
    type: typeof SET_BUILD_ORDERS_LOAD_STATUS,
    payload: LoadStatus,
}

export type BuildOrdersActionTypes = SetBuildOrders | SetBuildOrdersSearch | SetBuildOrdersRace | SetBuildOrdersSort
    | SetBuildOrdersLoadStatus
