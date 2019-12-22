import {
    BuildOrdersActionTypes,
    BuildOrdersState,
    SET_BUILD_ORDERS,
    SET_BUILD_ORDERS_LOAD_STATUS,
    SET_BUILD_ORDERS_RACE,
    SET_BUILD_ORDERS_SEARCH,
    SET_BUILD_ORDERS_SORT,
} from './types';
import {SettingsRepository} from '../../local_storage/SettingsRepository';
import {LoadStatus} from '../common/types';

const initialState: BuildOrdersState = {
    buildOrders: [],
    params: {search: null, race: SettingsRepository.getSelectedRace(), sortBy: SettingsRepository.getSortBy()},
    loadStatus: LoadStatus.LOADING,
};

export function buildOrdersReducer(state = initialState, action: BuildOrdersActionTypes): BuildOrdersState {
    switch (action.type) {
        case SET_BUILD_ORDERS_SEARCH:
            return {...state, params: {...state.params, search: action.payload}};
        case SET_BUILD_ORDERS:
            return {...state, buildOrders: action.payload};
        case SET_BUILD_ORDERS_RACE:
            return {...state, params: {...state.params, race: action.payload}};
        case SET_BUILD_ORDERS_SORT:
            return {...state, params: {...state.params, sortBy: action.payload}};
        case SET_BUILD_ORDERS_LOAD_STATUS:
            return {...state, loadStatus: action.payload};
        default:
            return state;
    }
}
