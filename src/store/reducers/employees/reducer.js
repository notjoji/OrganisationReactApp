import {EXAMPLE_TYPE, SET_EMPLOYEES, SET_MESSAGE_RESPONCE} from "./types";

const initialState = {
    isLoading: true,
    employees: [],
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
                isLoading: false,
                employees: action.payload
            };
        case SET_MESSAGE_RESPONCE:
            return {
                ...state,
                messageResponse: action.payload
            };
        default:
            return state;
    }
};