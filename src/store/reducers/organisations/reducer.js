import {
    EXAMPLE_TYPE,
    SET_MESSAGE_RESPONSE,
    SET_ORGANISATIONS,
    SET_ORGANISATIONS_LOADING,
    SET_ORGANISATIONS_TREE
} from "./types";

const initialState = {
    isOrganisationsLoading: true,
    organisations: [],
    organisationsTree: [],
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
                isOrganisationsLoading: false,
                organisations: action.payload
            };
        case SET_MESSAGE_RESPONSE:
            return {
                ...state,
                messageResponse: action.payload
            };
        case SET_ORGANISATIONS_TREE:
            return {
                ...state,
                isOrganisationsLoading: false,
                organisationsTree: action.payload
            };
        case SET_ORGANISATIONS_LOADING:
            return {
                ...state,
                isOrganisationsLoading: action.payload
            };
        default:
            return state;
    }
};