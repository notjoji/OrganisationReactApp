import {apiEmployees} from './index';

class EmployeeService {
    getAllEmployees = async () => {
        return await apiEmployees.get('/');
    };

    updateEmployeeById = async (id, data) => {
        return await apiEmployees.put(`/update/${id}`, data);
    };

    createNewEmployee = async (data) => {
        return await apiEmployees.post('/add', data);
    };

    deleteEmployeeById = async (id) => {
        return await apiEmployees.delete(`/delete/${id}`);
    }
}

export default new EmployeeService();