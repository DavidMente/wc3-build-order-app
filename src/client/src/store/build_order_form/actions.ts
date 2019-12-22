import {
    ADD_BUILD_ORDER_TASK,
    ADD_TASK_INDENT,
    BuildOrderForm,
    BuildOrderFormActionTypes,
    BuildOrderTaskDescription,
    DECREASE_TASK_INDENT,
    EDIT_BUILD_ORDER_TASK,
    MOVE_BUILD_ORDER_TASK_DOWN,
    MOVE_BUILD_ORDER_TASK_UP,
    REMOVE_BUILD_ORDER_TASK,
    RESET_BUILD_ORDER_FORM,
    SAVE_BUILD_ORDER,
    SELECT_BUILD_ORDER_RACE,
    SET_BUILD_ORDER_FORM,
    SET_BUILD_ORDER_FORM_ERRORS,
    UPDATE_BUILD_ORDER,
} from './types';
import {Dispatch} from 'redux';
import {BuildOrderApi} from '../../api/buildOrderApi';
import {ActionCode, BuildOrderDescription, FormErrors, Race} from '../common/types';
import {PasswordRepository} from '../../local_storage/PasswordRepository';
import {push} from 'connected-react-router';
import slugify from 'slugify';

export function addBuildOrderTask(actionCode: ActionCode): BuildOrderFormActionTypes {
    return {
        type: ADD_BUILD_ORDER_TASK,
        payload: actionCode,
    };
}

export function moveBuildOrderTaskDown(id: number): BuildOrderFormActionTypes {
    return {
        type: MOVE_BUILD_ORDER_TASK_DOWN,
        payload: id,
    };
}

export function moveBuildOrderTaskUp(id: number): BuildOrderFormActionTypes {
    return {
        type: MOVE_BUILD_ORDER_TASK_UP,
        payload: id,
    };
}

export function addTaskIndent(id: number): BuildOrderFormActionTypes {
    return {
        type: ADD_TASK_INDENT,
        payload: id,
    };
}

export function decreaseTaskIndent(id: number): BuildOrderFormActionTypes {
    return {
        type: DECREASE_TASK_INDENT,
        payload: id,
    };
}

export function removeBuildOrderTask(id: number): BuildOrderFormActionTypes {
    return {
        type: REMOVE_BUILD_ORDER_TASK,
        payload: id,
    };
}

export function editBuildOrderTask(buildOrderTaskDescription: BuildOrderTaskDescription): BuildOrderFormActionTypes {
    return {
        type: EDIT_BUILD_ORDER_TASK,
        payload: buildOrderTaskDescription,
    };
}

export function selectBuildOrderRace(race: Race): BuildOrderFormActionTypes {
    return {
        type: SELECT_BUILD_ORDER_RACE,
        payload: race,
    };
}

export function updateBuildOrder(buildOrderDescription: BuildOrderDescription): BuildOrderFormActionTypes {
    return {
        type: UPDATE_BUILD_ORDER,
        payload: buildOrderDescription,
    };
}

export const saveBuildOrder = (buildOrder: BuildOrderForm) => (dispatch: Dispatch) => {
    BuildOrderApi.saveBuildOrder(buildOrder)
        .then(({data}) => {
            dispatch(saveBuildOrderSuccess(data));
            PasswordRepository.savePassword(data._id, data.password);
            dispatch(push('/build_order/' + data._id + '/' + slugify(data.name)));
        })
        .catch((error) => {
            if ([422, 403].includes(error.response.status)) {
                dispatch(setBuildOrderFormErrors(error.response.data.errors));
            }
        });
};

export function saveBuildOrderSuccess(buildOrder: BuildOrderForm): BuildOrderFormActionTypes {
    return {
        type: SAVE_BUILD_ORDER,
        payload: buildOrder,
    };
}

export const fetchBuildOrderForm = (id: number) => async (dispatch: Dispatch) => {
    const response = await BuildOrderApi.getBuildOrder(id);
    if (response.status === 200) {
        dispatch(setBuildOrderForm(response.data));
    }
};

export function setBuildOrderForm(buildOrder: BuildOrderForm): BuildOrderFormActionTypes {
    return {
        type: SET_BUILD_ORDER_FORM,
        payload: buildOrder,
    };
}

export function setBuildOrderFormErrors(errors: FormErrors): BuildOrderFormActionTypes {
    return {
        type: SET_BUILD_ORDER_FORM_ERRORS,
        payload: errors,
    };
}

export function resetBuildOrderForm(): BuildOrderFormActionTypes {
    return {
        type: RESET_BUILD_ORDER_FORM,
    };
}

export const deleteBuildOrder = (id: number, password: string) => (dispatch: Dispatch) => {
    if (window.confirm('Are you sure?')) {
        BuildOrderApi.deleteBuildOrder(id, password)
            .then(() => {
                dispatch(resetBuildOrderForm());
                dispatch(push('/'));
            })
            .catch((error) => {
                if ([403].includes(error.response.status)) {
                    dispatch(setBuildOrderFormErrors(error.response.data.errors));
                }
            });
    }
};
