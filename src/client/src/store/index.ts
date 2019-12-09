import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import {buildOrdersReducer} from './build_orders/reducers';
import {buildOrderFormReducer} from './build_order_form/reducers';
import {buildOrderReducer} from './build_order/reducers';
import {connectRouter, routerMiddleware} from 'connected-react-router';
import { createBrowserHistory } from 'history'

export const history = createBrowserHistory();

const rootReducer = combineReducers({
    buildOrderForm: buildOrderFormReducer,
    buildOrders: buildOrdersReducer,
    buildOrder: buildOrderReducer,
    router: connectRouter(history),
});

export type RootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunk, routerMiddleware(history)));
