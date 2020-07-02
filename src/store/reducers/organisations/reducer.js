import {EXAMPLE_TYPE, SET_MESSAGE_RESPONCE, SET_ORGANISATIONS} from "./types";

const initialState = {
    isLoading: true,
    organisations: [],
    messageResponse: "",
};

export default (state = initialState, action) => {
    switch (action.type) {
        case EXAMPLE_TYPE:
            return {
                ...state
            };
        case SET_ORGANISATIONS:
            return {
                ...state,
                isLoading: false,
                organisations: action.payload
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