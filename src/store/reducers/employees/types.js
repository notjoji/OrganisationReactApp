export const EXAMPLE_TYPE = 'EXAMPLE_TYPE';
export const SET_EMPLOYEES = 'SET_EMPLOYEES';
export const SET_MESSAGE_RESPONCE = 'SET_MESSAGE_RESPONCE';

export const setEmployees = (employees) => ({
    type: SET_EMPLOYEES,
    payload: employees
});

export const setMessageResponse = (response) => ({
    type: SET_MESSAGE_RESPONCE,
    payload: response
});