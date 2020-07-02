import {EXAMPLE_TYPE} from "./types";

const initialState = {

};

export default (state = initialState, action) => {
    switch (action.type) {
        case EXAMPLE_TYPE:
            return {
                ...state
            };
        default:
            return state;
    }
};