import React from 'react';
import {connect} from 'react-redux';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from "@material-ui/lab/TreeItem";
import useDefaultStyles from "../../../styles";
import Paper from "@material-ui/core/Paper/Paper";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {loadEmployeesTree} from "../../../store/reducers/employees/actions";
import {loadOrganisations} from "../../../store/reducers/organisations/actions";
import Container from "@material-ui/core/Container";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const mapStateToProps = state => {
    const {isEmployeesLoading, employeesTree} = state.employees;
    const {isOrganisationsLoading, organisations} = state.organisations;
    return {
        isEmployeesLoading, employeesTree, isOrganisationsLoading, organisations
    }
};

const mapDispatchToProps = dispatch => {
    return {
        loadEmployeesTree: (id) => dispatch(loadEmployeesTree(id)),
        loadOrganisations: () => dispatch(loadOrganisations()),
    }
};

const EmployeesTree = (props) => {
    const {isEmployeesLoading, employeesTree, isOrganisationsLoading, organisations, loadEmployeesTree, loadOrganisations} = props;

    const [organisationsData, setOrganisationsData] = React.useState(() => loadOrganisations());
    const [currentOrganisation, setCurrentOrganisation] = React.useState({
        id: organisations.length > 0 ? organisations[0].id : 1,
        name: organisations.length > 0 ? organisations[0].name : "Sample organisation"
    });

    const [tree, setTree] = React.useState(() => loadEmployeesTree(currentOrganisation.id));
    const [employeesLoading, setEmployeesLoading] = React.useState(true);

    const classes = useDefaultStyles();

    const data = employeesTree ? employeesTree : [];

    const handleSelect = (event) => {
        setCurrentOrganisation({
            id: event.target.value,
            name: organisations.find(x => x.id === event.target.value).name
        });
        setTree(() => loadEmployeesTree(currentOrganisation.id));
    };

    const renderTree = (nodes) => (
        <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name}>
            {Array.isArray(nodes.children) ? nodes.children.map((node) => renderTree(node)) : null}
        </TreeItem>
    );

    let selectData = organisations.map(({id, name}) => (
        <MenuItem key={id} value={id}>{name}</MenuItem>
    ));

    let content = isEmployeesLoading && isOrganisationsLoading ?
        <h1>Loading...</h1> :
        <>
            <Paper className={classes.paper}>
                <Container className={classes.container}>
                    <TreeView
                        className={classes.root}
                        defaultCollapseIcon={<ExpandMoreIcon/>}
                        defaultExpanded={['root']}
                        defaultExpandIcon={<ChevronRightIcon/>}
                    >
                        {renderTree(data)}
                    </TreeView>
                    <p>Дерево организации: </p>
                    <FormControl className={classes.formControl}>
                        <Select
                            value={currentOrganisation.id}
                            onChange={handleSelect}
                            displayEmpty
                            className={classes.selectEmpty}
                            inputProps={{ 'aria-label': 'Without label' }}
                        >
                            {selectData}
                        </Select>
                    </FormControl>
                </Container>
            </Paper>
        </>;

    return (
        <div className={classes.content}>
            {content}
        </div>
    )
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeesTree);