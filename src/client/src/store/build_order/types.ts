import {BuildOrder, LoadStatus} from '../common/types';

export const SET_BUILD_ORDER = 'SET_BUILD_ORDER';
export const SET_BUILD_ORDER_LOAD_STATUS = 'SET_BUILD_ORDER_LOAD_STATUS';

interface SetBuildOrder {
    type: typeof SET_BUILD_ORDER,
    payload: BuildOrder,
}

interface SetBuildOrderLoadStatus {
    type: typeof SET_BUILD_ORDER_LOAD_STATUS,
    payload: LoadStatus,
}

export type BuildOrderActionTypes = SetBuildOrder | SetBuildOrderLoadStatus
