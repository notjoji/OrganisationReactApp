import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from "@material-ui/lab/TreeItem";
import Tree from '../../node/Node';

const BASE_PATH = "http://localhost:8081";
const SOURCE_PATH = "/employees";

const mapStateToProps = state => {
    return {

    }
};

const mapDispatchToProps = dispatch => ({

});

export const EMPLOYEES_OF_ONE_ORGANISATION = [
    {
        id: 1,
        name: 'Employee 1',
        organisationId: 1,
        supervisorId: null
    },
    {
        id: 2,
        name: 'Employee 2',
        organisationId: 1,
        supervisorId: 1
    },
    {
        id: 3,
        name: 'Employee 3',
        organisationId: 1,
        supervisorId: 1
    },
    {
        id: 4,
        name: 'Employee 4',
        organisationId: 1,
        supervisorId: 3
    },
];

class EmployeesTree extends Component {
    constructor() {
        super();
        this.state = {
            tree: new Tree(this.findBoss(EMPLOYEES_OF_ONE_ORGANISATION)),
        };
    }

    findBoss(employees) {
        return employees.find(employee => employee.supervisorId === null);
    }

    findSupervisor(employees, worker) {
        return employees.find(employee => employee.id === worker.supervisorId);
    }

    componentDidMount() {
        let updatedTree = this.state.tree;
        EMPLOYEES_OF_ONE_ORGANISATION.forEach((element, index, array) => {
            if (element.supervisorId !== null) {
                var supervisor = this.findSupervisor(EMPLOYEES_OF_ONE_ORGANISATION, element);
                if (supervisor) {
                    updatedTree.add(element, supervisor, this.state.tree.traverseBF);
                }
            }
        });
        this.setState(({tree: updatedTree}));
    }

    findElement(elements, children) {
        return [];
    }

    render() {
        const { tree } = this.state;
        var elements = [];
        //let TreeView = React.createElement("TreeView", {}, []);
        //console.log(TreeView);

        if (tree) {
            tree.traverseDF(function (node) {
                var children = [];
                if (node.data.children.length !== 0)
                    return;
                /*if (node.data.supervisorId === null) {
                    let treeItem = React.createElement("TreeItem", {nodeId: node.data.name, label: node.data.name});
                    console.log(treeItem);

                }*/
                elements.push(React.createElement("li", {id: node.data.id}, []));

                console.log(node);
            });
            console.log(elements);
        }

        return (
            <TreeView>
                <TreeItem nodeId="1" label="Applications">
                    <TreeItem nodeId="2" label="Calendar" />
                    <TreeItem nodeId="3" label="Chrome" />
                    <TreeItem nodeId="4" label="Webstorm" />
                </TreeItem>
                <TreeItem nodeId="5" label="Documents">
                    <TreeItem nodeId="6" label="Material-UI">
                        <TreeItem nodeId="7" label="src">
                            <TreeItem nodeId="8" label="index.js" />
                            <TreeItem nodeId="9" label="tree-view.js" />
                        </TreeItem>
                    </TreeItem>
                </TreeItem>
            </TreeView>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeesTree);