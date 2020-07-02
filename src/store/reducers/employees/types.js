export const EXAMPLE_TYPE = 'EXAMPLE_TYPE';
export const SET_EMPLOYEES = 'SET_EMPLOYEES';
export const SET_MESSAGE_RESPONSE = 'SET_MESSAGE_RESPONSE';
export const SET_EMPLOYEES_TREE = 'SET_EMPLOYEES_TREE';
export const SET_EMPLOYEES_LOADING = 'SET_EMPLOYEES_LOADING';

export const setEmployees = (employees) => ({
    type: SET_EMPLOYEES,
    payload: employees
});

export const setMessageResponse = (response) => ({
    type: SET_MESSAGE_RESPONSE,
    payload: response
});

export const setEmployeesTree = (employeesTree) => ({
    type: SET_EMPLOYEES_TREE,
    payload: employeesTree
});

export const setEmployeesLoading = (loading) => ({
    type: SET_EMPLOYEES_LOADING,
    payload: loading
});
