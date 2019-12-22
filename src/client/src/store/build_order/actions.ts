import {Dispatch} from 'redux';
import {BuildOrderApi} from '../../api/buildOrderApi';
import {BuildOrderActionTypes, SET_BUILD_ORDER, SET_BUILD_ORDER_LOAD_STATUS} from './types';
import {BuildOrder, LoadStatus} from '../common/types';

export const fetchBuildOrder = (id: number) => async (dispatch: Dispatch) => {
    dispatch(setBuildOrderLoadStatus(LoadStatus.LOADING))
    const response = await BuildOrderApi.getBuildOrder(id);
    if (response.status === 200) {
        dispatch(setBuildOrder(response.data));
    }
    dispatch(setBuildOrderLoadStatus(LoadStatus.LOADED))
};

export function setBuildOrder(buildOrder: BuildOrder): BuildOrderActionTypes {
    return {
        type: SET_BUILD_ORDER,
        payload: buildOrder,
    };
}

export function setBuildOrderLoadStatus(loadStatus: LoadStatus): BuildOrderActionTypes {
    return {
        type: SET_BUILD_ORDER_LOAD_STATUS,
        payload: loadStatus,
    };
}
