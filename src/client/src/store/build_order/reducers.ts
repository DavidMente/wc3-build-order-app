import {BuildOrderActionTypes, SET_BUILD_ORDER} from './types';
import {BuildOrder, Race} from '../common/types';

const initialState: BuildOrder = {
    name: '',
    author: null,
    description: null,
    race: Race.HUMAN,
    views: 0,
    tasks: [],
}

export function buildOrderReducer(state = initialState, action: BuildOrderActionTypes): BuildOrder {
    switch (action.type) {
        case SET_BUILD_ORDER:
            return {...state, ...action.payload};
        default:
            return state;
    }
}
