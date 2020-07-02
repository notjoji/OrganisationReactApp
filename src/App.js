import React from 'react';
import {Router, Switch, Route} from "react-router-dom";
import Home from "./components/home/Home";
import OrganisationsList from "./components/organisatons/organisationsList/OrganisationsList";
import EmployeesList from "./components/employees/employeesList/EmployeesList";
import EmployeesTree from "./components/employees/employeesTree/EmployeesTree";
import OrganisationsTree from "./components/organisatons/organisationsTree/OrganisatonsTree";
import {history} from "./index";
import {connect} from 'react-redux';
import Layout from "./components/layout/Layout";

const error404 = () => <h1>Error 404</h1>;
const home_page = () => <Layout><Home/></Layout>;
const employees_list_page = () => <Layout><EmployeesList/></Layout>;
const organisations_list_page = () => <Layout><OrganisationsList/></Layout>;
const employees_tree_page = () => <Layout><EmployeesTree/></Layout>;
const organisations_tree_page = () => <Layout><OrganisationsTree/></Layout>;

const App = () => (
    <Router history={history}>
        <Switch>
            <Route exact path={'/'} component={home_page}/>
            <Route path={'/employeesList'} component={employees_list_page}/>
            <Route path={'/organisationsList'} component={organisations_list_page}/>
            <Route path={'/employeesTree'} component={employees_tree_page}/>
            <Route path={'/organisationsTree'} component={organisations_tree_page}/>
            <Route exact component={error404}/>
        </Switch>
    </Router>
);

export default connect()(App);