import React from 'react';
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import useDefaultStyles from "../../styles";

const Header = () => {
    const classes = useDefaultStyles();

    return (
        <div className={classes.generic}>
            <Breadcrumbs aria-label="breadcrumb">
                <Link color="inherit" href="/employeesList">
                    Список сотрудников
                </Link>
                <Link color="inherit" href="/organisationsList">
                    Список организаций
                </Link>
                <Link color="inherit" href="/employeesTree">
                    Дерево сотрудников
                </Link>
                <Link color="inherit" href="/organisationsTree">
                    Дерево организаций
                </Link>
            </Breadcrumbs>
        </div>
    );
};

export default Header;