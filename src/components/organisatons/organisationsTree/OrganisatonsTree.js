import React from 'react';
import {connect} from "react-redux";
import useDefaultStyles from "../../../styles";
import TreeView from "@material-ui/lab/TreeView/TreeView";
import TreeItem from "@material-ui/lab/TreeItem/TreeItem";
import Paper from "@material-ui/core/Paper/Paper";
import {loadOrganisationsTree} from "../../../store/reducers/organisations/actions";
import Container from "@material-ui/core/Container";
import ExpandMoreIcon from "@material-ui/core/SvgIcon/SvgIcon";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const mapStateToProps = state => {
    const { isOrganisationsLoading, organisationsTree } = state.organisations;
    return {
        isOrganisationsLoading, organisationsTree
    }
};

const mapDispatchToProps = dispatch => {
    return {
        loadOrganisationsTree: () => dispatch(loadOrganisationsTree()),
    }
};

const OrganisationsTree = (props) => {
    const {isOrganisationsLoading, organisationsTree, loadOrganisationsTree} = props;

    const [tree, setTree] = React.useState(() => loadOrganisationsTree());

    const classes = useDefaultStyles();

    const data = organisationsTree ? organisationsTree : [];

    const renderTree = (nodes) => (
        <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name}>
            {Array.isArray(nodes.children) ? nodes.children.map((node) => renderTree(node)) : null}
        </TreeItem>
    );

    let content = isOrganisationsLoading ?
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
                </Container>
            </Paper>
        </>;

    return (
        <div className={classes.content}>
            {content}
        </div>
    )
};

export default connect(mapStateToProps, mapDispatchToProps)(OrganisationsTree);