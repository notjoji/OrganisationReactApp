import {EXAMPLE_TYPE, SET_EMPLOYEES, SET_EMPLOYEES_LOADING, SET_EMPLOYEES_TREE, SET_MESSAGE_RESPONSE} from "./types";

const initialState = {
    isEmployeesLoading: true,
    employees: [],
    employeesTree: [],
    messageResponse: "",
};

export default (state = initialState, action) => {
    switch (action.type) {
        case EXAMPLE_TYPE:
            return {
                ...state
            };
        case SET_EMPLOYEES:
            return {
                ...state,
                isEmployeesLoading: false,
                employees: action.payload
            };
        case SET_EMPLOYEES_TREE:
            return {
                ...state,
                isEmployeesLoading: false,
                employeesTree: action.payload
            };
        case SET_MESSAGE_RESPONSE:
            return {
                ...state,
                messageResponse: action.payload
            };
        case SET_EMPLOYEES_LOADING:
            return {
                ...state,
                isEmployeesLoading: action.payload
            };
        default:
            return state;
    }
};