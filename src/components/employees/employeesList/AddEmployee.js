import React from 'react';
import {connect} from "react-redux";
import Paper from "@material-ui/core/Paper/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField/TextField";
import useDefaultStyles from "../../../styles";
import Button from "@material-ui/core/Button";
import {addEmployee} from "../../../store/reducers/employees/actions";

const mapStateToProps = state => {
    const { messageResponse } = state.employees;
    return {
        messageResponse
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addEmployee: (data) => dispatch(addEmployee(data)),
    }
};

const AddEmployee = (props) => {
    const { messageResponse, addEmployee } = props;

    const [nameValue, setNameValue] = React.useState("");
    const [organisationIdValue, setOrganisationIdValue] = React.useState("");
    const [supervisorIdValue, setSupervisorIdValue] = React.useState("");
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

    const handleCreateButton = () => {
        addEmployee({
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
                            <Typography className={classes.typography}>Форма создания сотрудника</Typography>
                        </Grid>
                        <Grid item>
                            <TextField id="name"
                                       label="Имя сотрудника"
                                       type="text"
                                       onChange={handleName}
                                       value={nameValue}
                                       variant="outlined"
                                       fullWidth
                            />
                        </Grid>
                        <Grid item>
                            <TextField id="organisationId"
                                       label="Id организации"
                                       type="text"
                                       onChange={handleOrganisationId}
                                       value={organisationIdValue}
                                       variant="outlined"
                                       fullWidth
                            />
                        </Grid>
                        <Grid item>
                            <TextField id="supervisorId"
                                       label="Id руководителя"
                                       type="text"
                                       onChange={handleSupervisorId}
                                       defaultValue={supervisorIdValue}
                                       variant="outlined"
                                       fullWidth
                            />
                        </Grid>
                        <Grid item>
                            <Button variant="contained" color="primary" onClick={handleCreateButton}>
                                Добавить
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

export default connect(mapStateToProps, mapDispatchToProps)(AddEmployee);