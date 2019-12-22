import {ActionCode, BuildOrderDescription, Form, FormErrors, Race} from '../common/types';

export interface BuildOrderForm extends BuildOrderDescription, Form {
    race: Race | null,
    tasks: BuildOrderTask[],
    _id?: number,
}

export interface BuildOrderTaskDescription {
    id: number,
    description: string | null,
}

export interface BuildOrderTask extends BuildOrderTaskDescription {
    id: number,
    indentation: number,
    actionCode: ActionCode,
    accumulatedSupply?: number,
    accumulatedFoodCost?: number,
}

export const UPDATE_BUILD_ORDER = 'UPDATE_BUILD_ORDER';
export const ADD_BUILD_ORDER_TASK = 'ADD_BUILD_ORDER_TASK';
export const MOVE_BUILD_ORDER_TASK_DOWN = 'MOVE_BUILD_ORDER_TASK_DOWN';
export const MOVE_BUILD_ORDER_TASK_UP = 'MOVE_BUILD_ORDER_TASK_UP';
export const REMOVE_BUILD_ORDER_TASK = 'REMOVE_BUILD_ORDER_TASK';
export const EDIT_BUILD_ORDER_TASK = 'EDIT_BUILD_ORDER_TASK';
export const SELECT_BUILD_ORDER_RACE = 'SELECT_BUILD_ORDER_RACE';
export const SAVE_BUILD_ORDER = 'SAVE_BUILD_ORDER';
export const SET_BUILD_ORDER_FORM = 'SET_BUILD_ORDER_FORM';
export const SET_BUILD_ORDER_FORM_ERRORS = 'SET_BUILD_ORDER_FORM_ERRORS';
export const RESET_BUILD_ORDER_FORM = 'RESET_BUILD_ORDER_FORM';
export const DELETE_BUILD_ORDER = 'DELETE_BUILD_ORDER';
export const ADD_TASK_INDENT = 'ADD_TASK_INDENT';
export const DECREASE_TASK_INDENT = 'DECREASE_TASK_INDENT';

interface AddBuildOrderTask {
    type: typeof ADD_BUILD_ORDER_TASK,
    payload: ActionCode
}

interface AddBuildOrderTask {
    type: typeof ADD_BUILD_ORDER_TASK,
    payload: ActionCode
}

interface MoveBuildOrderTaskDown {
    type: typeof MOVE_BUILD_ORDER_TASK_DOWN,
    payload: number,
}

interface MoveBuildOrderTaskUp {
    type: typeof MOVE_BUILD_ORDER_TASK_UP,
    payload: number,
}

interface RemoveBuildOrderTask {
    type: typeof REMOVE_BUILD_ORDER_TASK,
    payload: number
}

interface AddTaskIndent {
    type: typeof ADD_TASK_INDENT,
    payload: number,
}

interface DecreaseTaskIndent {
    type: typeof DECREASE_TASK_INDENT,
    payload: number,
}

interface EditBuildOrderTask {
    type: typeof EDIT_BUILD_ORDER_TASK,
    payload: BuildOrderTaskDescription,
}

interface SelectBuildOrderRace {
    type: typeof SELECT_BUILD_ORDER_RACE,
    payload: Race
}

interface UpdateBuildOrder {
    type: typeof UPDATE_BUILD_ORDER,
    payload: BuildOrderDescription
}

interface SaveBuildOrder {
    type: typeof SAVE_BUILD_ORDER,
    payload: BuildOrderForm,
}

interface SetBuildOrderForm {
    type: typeof SET_BUILD_ORDER_FORM,
    payload: BuildOrderForm,
}

interface SetBuildOrderFormErrors {
    type: typeof SET_BUILD_ORDER_FORM_ERRORS,
    payload: FormErrors,
}

interface ResetBuildOrderForm {
    type: typeof RESET_BUILD_ORDER_FORM,
}

interface DeleteBuildOrder {
    type: typeof DELETE_BUILD_ORDER,
}

export type BuildOrderFormActionTypes =
    RemoveBuildOrderTask
    | AddBuildOrderTask
    | SelectBuildOrderRace
    | MoveBuildOrderTaskDown
    | MoveBuildOrderTaskUp
    | EditBuildOrderTask
    | UpdateBuildOrder
    | SaveBuildOrder
    | SetBuildOrderForm
    | ResetBuildOrderForm
    | SetBuildOrderFormErrors
    | DeleteBuildOrder
    | AddTaskIndent
    | DecreaseTaskIndent
