import axios from 'axios';
import {BuildOrderForm} from '../store/build_order_form/types';
import {BuildOrdersParams} from '../store/build_orders/types';

export const BuildOrderApi = {

    getBuildOrders(params: BuildOrdersParams) {
        return axios.get('/api/build_orders', {params});
    },

    saveBuildOrder(buildOrder: BuildOrderForm) {
        if (buildOrder._id !== undefined) {
            return axios.put('/api/build_orders/' + buildOrder._id, buildOrder,
                {headers: {auth: buildOrder.password}});
        } else {
            return axios.post('/api/build_orders', buildOrder);
        }
    },

    getBuildOrder(id: number) {
        return axios.get('/api/build_orders/' + id);
    },

    deleteBuildOrder(id: number, password: string) {
        return axios.delete('/api/build_orders/' + id, {headers: {auth: password}});
    },

};
