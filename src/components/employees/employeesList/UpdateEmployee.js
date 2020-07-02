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
    const { id, name, organisationName, supervisorName, messageResponse, updateEmployee } = props;

    const [nameValue, setNameValue] = React.useState(name);
    const [organisationNameValue, setOrganisationNameValue] = React.useState(organisationName);
    const [supervisorNameValue, setSupervisorNameValue] = React.useState(supervisorName);
    const classes = useDefaultStyles();

    const handleName = (event) => {
        setNameValue(event.target.value);
    };

    const handleOrganisationName = (event) => {
        setOrganisationNameValue(event.target.value);
    };

    const handleSupervisorName = (event) => {
        setSupervisorNameValue(event.target.value);
    };

    const handleUpdateButton = () => {
        updateEmployee(id, {
            name: nameValue,
            organisationName: organisationNameValue,
            supervisorName: supervisorNameValue
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
                                       required
                            />
                        </Grid>
                        <Grid item>
                            <TextField id="organisationName"
                                       label="Название организации"
                                       type="text"
                                       onChange={handleOrganisationName}
                                       value={organisationNameValue ? organisationNameValue : ''}
                                       variant="outlined"
                                       fullWidth
                            />
                        </Grid>
                        <Grid item>
                            <TextField id="supervisorName"
                                       label="Имя руководителя"
                                       type="text"
                                       onChange={handleSupervisorName}
                                       defaultValue={supervisorNameValue ? supervisorNameValue : ''}
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