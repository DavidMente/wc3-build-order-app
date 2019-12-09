import {BuildOrder} from '../common/types';

export const SET_BUILD_ORDER = 'SET_BUILD_ORDER';

interface SetBuildOrder {
    type: typeof SET_BUILD_ORDER,
    payload: BuildOrder,
}

export type BuildOrderActionTypes = SetBuildOrder
