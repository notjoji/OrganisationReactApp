export const EXAMPLE_TYPE = 'EXAMPLE_TYPE';
export const SET_ORGANISATIONS = 'SET_ORGANISATIONS';
export const SET_MESSAGE_RESPONCE = 'SET_MESSAGE_RESPONCE';

export const setOrganisations = (organisations) => ({
    type: SET_ORGANISATIONS,
    payload: organisations
});

export const setMessageResponse = (response) => ({
    type: SET_MESSAGE_RESPONCE,
    payload: response
});