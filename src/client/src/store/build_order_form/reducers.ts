import {
    ADD_BUILD_ORDER_TASK,
    ADD_TASK_INDENT,
    BuildOrderForm,
    BuildOrderFormActionTypes,
    BuildOrderTask,
    DECREASE_TASK_INDENT,
    EDIT_BUILD_ORDER_TASK,
    MOVE_BUILD_ORDER_TASK_DOWN,
    MOVE_BUILD_ORDER_TASK_UP,
    REMOVE_BUILD_ORDER_TASK,
    RESET_BUILD_ORDER_FORM,
    SELECT_BUILD_ORDER_RACE,
    SET_BUILD_ORDER_FORM,
    SET_BUILD_ORDER_FORM_ERRORS,
    UPDATE_BUILD_ORDER,
} from './types';
import {PasswordRepository} from '../../local_storage/PasswordRepository';
import {mapActionCodeToDetails} from '../common/actionCodes';

const initialState: BuildOrderForm = {
    name: null,
    author: null,
    description: null,
    race: null,
    tasks: [],
    errors: {},
};

function generateId(tasks: BuildOrderTask[]): number {
    const id = getRandomNumber();
    if (!tasklistContainsId(tasks, id)) {
        return id;
    } else {
        return generateId(tasks);
    }
}

function getRandomNumber(): number {
    return Math.ceil(Math.random() * 1000);
}

function tasklistContainsId(tasks: BuildOrderTask[], id: number): boolean {
    return tasks.some((task) => task.id === id);
}

function getElementById(id: number, tasks: BuildOrderTask[]): BuildOrderTask | undefined {
    return tasks.find((task) => task.id === id);
}

function getElementIndex(id: number, tasks: BuildOrderTask[]): number {
    return tasks.findIndex((task) => task.id === id);
}

function moveElementDown(moveTask: BuildOrderTask, tasks: BuildOrderTask[]): BuildOrderTask[] {
    const targetIndex = getElementIndex(moveTask.id, tasks) + 1;
    return moveElement(moveTask, tasks, targetIndex);
}

function moveElementUp(moveTask: BuildOrderTask, tasks: BuildOrderTask[]): BuildOrderTask[] {
    const targetIndex = getElementIndex(moveTask.id, tasks) - 1;
    return moveElement(moveTask, tasks, targetIndex);
}

function moveElement(moveTask: BuildOrderTask, tasks: BuildOrderTask[], targetIndex: number): BuildOrderTask[] {
    const newTasks = tasks.filter((task) => task.id !== moveTask.id);
    newTasks.splice(targetIndex, 0, moveTask);
    return newTasks;
}

export function buildOrderFormReducer(state = initialState, action: BuildOrderFormActionTypes): BuildOrderForm {
    switch (action.type) {
        case ADD_BUILD_ORDER_TASK:
            const actionCodeProps = mapActionCodeToDetails(action.payload);
            const description = actionCodeProps.description ||
                ((actionCodeProps.type || '') + ' ' + actionCodeProps.name);
            return {
                ...state,
                tasks: [...state.tasks, {
                    id: generateId(state.tasks),
                    indentation: 0,
                    actionCode: action.payload,
                    description,
                }],
            };
        case REMOVE_BUILD_ORDER_TASK:
            return {
                ...state,
                tasks: state.tasks.filter((task) => task.id !== action.payload),
            };
        case EDIT_BUILD_ORDER_TASK:
            return {
                ...state,
                tasks: state.tasks.map((task) => task.id === action.payload.id ? {
                    ...task,
                    description: action.payload.description,
                } : task),
            };
        case ADD_TASK_INDENT:
            return {
                ...state,
                tasks: state.tasks.map((task) => task.id === action.payload ? {
                    ...task,
                    indentation: task.indentation < 3 ? task.indentation + 1 : task.indentation,
                } : task),
            };
        case DECREASE_TASK_INDENT:
            return {
                ...state,
                tasks: state.tasks.map((task) => task.id === action.payload ? {
                    ...task,
                    indentation: task.indentation > 0 ? task.indentation - 1 : task.indentation,
                } : task),
            };
        case SELECT_BUILD_ORDER_RACE:
            if (state.race === null || state.tasks.length === 0 ||
                window.confirm('Are you sure? Changing the race will reset the build order!')) {
                return {
                    ...state,
                    race: action.payload,
                    tasks: [],
                };
            } else {
                return state;
            }
        case MOVE_BUILD_ORDER_TASK_DOWN:
            const elementDown = getElementById(action.payload, state.tasks);
            if (elementDown) {
                return {
                    ...state,
                    tasks: moveElementDown(elementDown, state.tasks),
                };
            } else {
                return state;
            }
        case MOVE_BUILD_ORDER_TASK_UP:
            const elementUp = getElementById(action.payload, state.tasks);
            if (elementUp) {
                return {
                    ...state,
                    tasks: moveElementUp(elementUp, state.tasks),
                };
            } else {
                return state;
            }
        case UPDATE_BUILD_ORDER:
            return {
                ...state,
                name: action.payload.name,
                description: action.payload.description,
                author: action.payload.author,
                password: action.payload.password,
            };
        case SET_BUILD_ORDER_FORM:
            return {
                name: action.payload.name,
                race: action.payload.race,
                tasks: action.payload.tasks,
                description: action.payload.description,
                author: action.payload.author,
                _id: action.payload._id,
                password: action.payload.password || PasswordRepository.getPassword(action.payload._id),
                errors: {},
            };
        case RESET_BUILD_ORDER_FORM:
            return {
                name: null,
                author: null,
                description: null,
                race: null,
                tasks: [],
                errors: {},
            };
        case SET_BUILD_ORDER_FORM_ERRORS:
            return {
                ...state, errors: action.payload,
            };
        default:
            return state;
    }
}
