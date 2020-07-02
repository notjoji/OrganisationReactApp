import {apiOrganisations} from './index';

class OrganisationService {
    getAllOrganisations = async () => {
        return await apiOrganisations.get('/');
    };

    updateOrganisationById = async (id, data) => {
        return await apiOrganisations.put(`/update/${id}`, data);
    };

    createNewOrganisation = async (data) => {
        return await apiOrganisations.post('/add', data);
    };

    deleteOrganisationById = async (id) => {
        return await apiOrganisations.delete(`/delete/${id}`);
    }
}

export default new OrganisationService();