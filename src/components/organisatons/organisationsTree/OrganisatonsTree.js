import React, {Component} from 'react';
import {connect} from "react-redux";

const BASE_PATH = "http://localhost:8081";
const SOURCE_PATH = "/employees";

const mapStateToProps = state => {
    return {
        orgTreeLoaded: state.organisations.orgTreeLoaded,
    }
};

const mapDispatchToProps = dispatch => ({
    onLoad: () => dispatch(loadOrganisations()),
});

class OrganisationsTree extends Component {
    state = {
        organisations: [],
    };

    render() {
        return (
            <div>

            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrganisationsTree);