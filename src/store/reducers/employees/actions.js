import EmployeeService from "../../../services/EmployeeService";
import {setEmployees, setEmployeesLoading, setEmployeesTree, setMessageResponse} from "./types";

export function loadEmployees() {
    return async function (dispatch) {
        const response = await EmployeeService.getAllEmployees();
        dispatch(setEmployees(response.data));
    }
}

export function updateEmployee(id, data) {
    return async function (dispatch) {
        const response = await EmployeeService.updateEmployeeById(id, data).finally(() => {
            dispatch(setMessageResponse("Произошла ошибка при обновлении сотрудника!"));
        });
        dispatch(setMessageResponse("Обновление сотрудника успешно!"));
    }
}

export function addEmployee(data) {
    return async function (dispatch) {
        const response = await EmployeeService.createNewEmployee(data).finally(() => {
            dispatch(setMessageResponse("Произошла ошибка при создании сотрудника!"));
        });
        dispatch(setMessageResponse("Создание сотрудника успешно!"));
    }
}

export function deleteEmployee(id) {
    return async function (dispatch) {
        const response = await EmployeeService.deleteEmployeeById(id).finally(() => {
            dispatch(setMessageResponse("Нельзя удалить сотрудника, который является руководителем!"));
        });
        dispatch(setMessageResponse("Удаление сотрудника успешно!"));
    }
}

export function resetMessageResponse() {
    return function (dispatch) {
        dispatch(setMessageResponse(""));
    }
}

export function loadEmployeesTree(id) {
    return async function (dispatch) {
        const response = await EmployeeService.getEmployeesTree(id);
        dispatch(setEmployeesTree(response.data));
    }
}

export function resetEmployeesLoading() {
    return async function (dispatch) {
        dispatch(setEmployeesLoading(true));
    }
}