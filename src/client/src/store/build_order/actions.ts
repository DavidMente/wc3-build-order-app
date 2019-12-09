import {Dispatch} from 'redux';
import {BuildOrderApi} from '../../api/buildOrderApi';
import {BuildOrderActionTypes, SET_BUILD_ORDER} from './types';
import {BuildOrder} from '../common/types';

export const fetchBuildOrder = (id: number) => async (dispatch: Dispatch) => {
    const response = await BuildOrderApi.getBuildOrder(id);
    if (response.status === 200) {
        dispatch(setBuildOrder(response.data));
    }
};

export function setBuildOrder(buildOrder: BuildOrder): BuildOrderActionTypes {
    return {
        type: SET_BUILD_ORDER,
        payload: buildOrder,
    };
}
