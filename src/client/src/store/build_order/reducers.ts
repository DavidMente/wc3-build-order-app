import {BuildOrderActionTypes, SET_BUILD_ORDER, SET_BUILD_ORDER_LOAD_STATUS} from './types';
import {BuildOrder, LoadStatus, Race} from '../common/types';

const initialState: BuildOrder = {
    name: '',
    author: null,
    description: null,
    race: Race.HUMAN,
    views: 0,
    tasks: [],
    loadStatus: LoadStatus.LOADING,
};

export function buildOrderReducer(state = initialState, action: BuildOrderActionTypes): BuildOrder {
    switch (action.type) {
        case SET_BUILD_ORDER:
            return {...state, ...action.payload};
        case SET_BUILD_ORDER_LOAD_STATUS:
            return {...state, loadStatus: action.payload};
        default:
            return state;
    }
}
