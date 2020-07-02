export const EXAMPLE_TYPE = 'EXAMPLE_TYPE';
export const SET_ORGANISATIONS = 'SET_ORGANISATIONS';
export const SET_MESSAGE_RESPONSE = 'SET_MESSAGE_RESPONSE';
export const SET_ORGANISATIONS_TREE = 'SET_ORGANISATIONS_TREE';
export const SET_ORGANISATIONS_LOADING = 'SET_ORGANISATIONS_LOADING';

export const setOrganisations = (organisations) => ({
    type: SET_ORGANISATIONS,
    payload: organisations
});

export const setMessageResponse = (response) => ({
    type: SET_MESSAGE_RESPONSE,
    payload: response
});

export const setOrganisationsTree = (organisationsTree) => ({
    type: SET_ORGANISATIONS_TREE,
    payload: organisationsTree
});

export const setOrganisationsLoading = (loading) => ({
    type: SET_ORGANISATIONS_LOADING,
    payload: loading
});