import React from 'react';
import {connect} from "react-redux";
import Paper from "@material-ui/core/Paper/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField/TextField";
import useDefaultStyles from "../../../styles";
import Button from "@material-ui/core/Button";
import {addOrganisation} from "../../../store/reducers/organisations/actions";

const mapStateToProps = state => {
    const { messageResponse } = state.organisations;
    return {
        messageResponse
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addOrganisation: (data) => dispatch(addOrganisation(data)),
    }
};

const AddOrganisation = (props) => {
    const { messageResponse, addOrganisation } = props;

    const [nameValue, setNameValue] = React.useState("");
    const [baseNameValue, setBaseNameValue] = React.useState("");
    const [supervisorNameValue, setSupervisorNameValue] = React.useState("");
    const classes = useDefaultStyles();

    const handleName = (event) => {
        setNameValue(event.target.value);
    };

    const handleBaseName = (event) => {
        setBaseNameValue(event.target.value);
    };

    const handleSupervisorName = (event) => {
        setSupervisorNameValue(event.target.value);
    };

    const handleCreateButton = () => {
        addOrganisation({
            name: nameValue,
            baseName: baseNameValue,
            supervisorName: supervisorNameValue
        });
    };

    return (
        <div className={classes.generic}>
            <main className={classes.content}>
                <Paper className={classes.paper}>
                    <Grid container direction='column' spacing={1} justify="center" alignItems="center">
                        <Grid item>
                            <Typography className={classes.typography}>Форма создания организации</Typography>
                        </Grid>
                        <Grid item>
                            <TextField id="name"
                                       label="Название организации"
                                       type="text"
                                       onChange={handleName}
                                       value={nameValue}
                                       variant="outlined"
                                       fullWidth
                                       required
                            />
                        </Grid>
                        <Grid item>
                            <TextField id="baseName"
                                       label="Название головной организации"
                                       type="text"
                                       onChange={handleBaseName}
                                       value={baseNameValue}
                                       variant="outlined"
                                       fullWidth
                            />
                        </Grid>
                        <Grid item>
                            <TextField id="supervisorName"
                                       label="Имя руководителя"
                                       type="text"
                                       onChange={handleSupervisorName}
                                       value={supervisorNameValue}
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

export default connect(mapStateToProps, mapDispatchToProps)(AddOrganisation);