import React from 'react';
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import useDefaultStyles from "../../styles";
import {connect} from "react-redux";
import {resetEmployeesLoading} from "../../store/reducers/employees/actions";
import {resetOrganisationsLoading} from "../../store/reducers/organisations/actions";

const mapStateToProps = state => {
    const {isEmployeesLoading} = state.employees;
    const {isOrganisationsLoading} = state.organisations;
    return {
        isEmployeesLoading, isOrganisationsLoading
    }
};

const mapDispatchToProps = dispatch => {
    return {
        resetEmployeesLoading: () => dispatch(resetEmployeesLoading()),
        resetOrganisationsLoading: () => dispatch(resetOrganisationsLoading()),
    }
};

const Header = (props) => {
    const {isEmployeesLoading, isOrganisationsLoading, resetEmployeesLoading, resetOrganisationsLoading} = props;
    const [employeesLoading, setEmployeesLoading] = React.useState(true);
    const [organisationsLoading, setOrganisationsLoading] = React.useState(true);

    const classes = useDefaultStyles();

    const handleLink = () => {
        setEmployeesLoading(() => resetEmployeesLoading());
        setOrganisationsLoading(() => resetOrganisationsLoading());
    };

    return (
        <div className={classes.generic}>
            <Breadcrumbs aria-label="breadcrumb">
                <Link color="inherit" href="/employeesList" onClick={handleLink}>
                    Список сотрудников
                </Link>
                <Link color="inherit" href="/organisationsList" onClick={handleLink}>
                    Список организаций
                </Link>
                <Link color="inherit" href="/employeesTree" onClick={handleLink}>
                    Дерево сотрудников
                </Link>
                <Link color="inherit" href="/organisationsTree" onClick={handleLink}>
                    Дерево организаций
                </Link>
            </Breadcrumbs>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);