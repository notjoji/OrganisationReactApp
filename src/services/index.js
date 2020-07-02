import Axios from 'axios';

export const apiEmployees = Axios.create({
    baseURL: 'http://localhost:8081/api/employees',
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        Accept: 'application/json'
    }
});

export const apiOrganisations = Axios.create({
    baseURL: 'http://localhost:8081/api/organisations',
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        Accept: 'application/json'
    }
});