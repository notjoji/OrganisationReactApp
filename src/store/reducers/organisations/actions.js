import OrganisationService from "../../../services/OrganisationService";
import {setMessageResponse, setOrganisations, setOrganisationsLoading, setOrganisationsTree} from "./types";

export function loadOrganisations() {
    return async function (dispatch) {
        const response = await OrganisationService.getAllOrganisations();
        dispatch(setOrganisations(response.data));
    }
}

export function updateOrganisation(id, data) {
    return async function (dispatch) {
        const response = await OrganisationService.updateOrganisationById(id, data).finally(() => {
            dispatch(setMessageResponse("Произошла ошибка при обновлении организации!"));
        });
        dispatch(setMessageResponse("Обновление организации успешно!"));
    }
}

export function addOrganisation(data) {
    return async function (dispatch) {
        const response = await OrganisationService.createNewOrganisation(data).finally(() => {
            dispatch(setMessageResponse("Произошла ошибка при создании организации!"));
        });
        dispatch(setMessageResponse("Создание организации успешно!"));
    }
}

export function deleteOrganisation(id) {
    return async function (dispatch) {
        const response = await OrganisationService.deleteOrganisationById(id).finally(() => {
            dispatch(setMessageResponse("Нельзя удалить организацию без дочерних филиалов!"));
        });
        dispatch(setMessageResponse("Удаление организации успешно!"));
    }
}

export function resetMessageResponse() {
    return function (dispatch) {
        dispatch(setMessageResponse(""));
    }
}

export function loadOrganisationsTree() {
    return async function (dispatch) {
        const response = await OrganisationService.getOrganisationsTree();
        dispatch(setOrganisationsTree(response.data));
    }
}

export function resetOrganisationsLoading() {
    return async function (dispatch) {
        dispatch(setOrganisationsLoading(true));
    }
}