import React from 'react';
import {connect} from "react-redux";
import useDefaultStyles from "../../../styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {updateEmployee} from "../../../store/reducers/employees/actions";

const mapStateToProps = state => {
    const { messageResponse } = state.employees;
    return {
        messageResponse
    }
};

const mapDispatchToProps = dispatch => {
    return {
        updateEmployee: (id, data) => dispatch(updateEmployee(id, data)),
    }
};

const UpdateEmployee = (props) => {
    const { id, name, organisationId, supervisorId, messageResponse, updateEmployee } = props;

    const [nameValue, setNameValue] = React.useState(name);
    const [organisationIdValue, setOrganisationIdValue] = React.useState(organisationId);
    const [supervisorIdValue, setSupervisorIdValue] = React.useState(supervisorId);
    const classes = useDefaultStyles();

    const handleName = (event) => {
        setNameValue(event.target.value);
    };

    const handleOrganisationId = (event) => {
        setOrganisationIdValue(event.target.value);
    };

    const handleSupervisorId = (event) => {
        setSupervisorIdValue(event.target.value);
    };

    const handleUpdateButton = () => {
        updateEmployee(id, {
            name: nameValue,
            organisationId: organisationIdValue,
            supervisorId: supervisorIdValue
        });
    };

    return (
        <div className={classes.generic}>
            <main className={classes.content}>
                <Paper className={classes.paper}>
                    <Grid container direction='column' spacing={1} justify="center" alignItems="center">
                        <Grid item>
                            <Typography className={classes.typography}>Форма изменения сотрудника</Typography>
                        </Grid>
                        <Grid item>
                            <p>Id сотрудника: {id}</p>
                        </Grid>
                        <Grid item>
                            <TextField id="name"
                                       label="Имя сотрудника"
                                       type="text"
                                       onChange={handleName}
                                       value={nameValue ? nameValue : ''}
                                       variant="outlined"
                                       fullWidth
                            />
                        </Grid>
                        <Grid item>
                            <TextField id="organisationId"
                                       label="Id организации"
                                       type="text"
                                       onChange={handleOrganisationId}
                                       value={organisationIdValue ? organisationIdValue : ''}
                                       variant="outlined"
                                       fullWidth
                            />
                        </Grid>
                        <Grid item>
                            <TextField id="supervisorId"
                                       label="Id руководителя"
                                       type="text"
                                       onChange={handleSupervisorId}
                                       defaultValue={supervisorIdValue ? supervisorIdValue : ''}
                                       variant="outlined"
                                       fullWidth
                            />
                        </Grid>
                        <Grid item>
                            <Button variant="contained" color="primary" onClick={handleUpdateButton}>
                                Обновить
                            </Button>
                        </Grid>
                        <Grid item>
                            <p>{messageResponse}</p>
                        </Grid>
                    </Grid>
                </Paper>
            </main>
        </div>
    )
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateEmployee);