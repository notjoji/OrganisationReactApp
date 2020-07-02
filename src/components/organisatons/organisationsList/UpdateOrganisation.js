import React from 'react';
import {connect} from "react-redux";
import useDefaultStyles from "../../../styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {updateOrganisation} from "../../../store/reducers/organisations/actions";

const mapStateToProps = state => {
    const { messageResponse } = state.organisations;
    return {
        messageResponse
    }
};

const mapDispatchToProps = dispatch => {
    return {
        updateOrganisation: (id, data) => dispatch(updateOrganisation(id, data)),
    }
};

const UpdateOrganisation = (props) => {
    const { id, name, baseId, messageResponse, updateOrganisation } = props;

    const [nameValue, setNameValue] = React.useState(name);
    const [baseIdValue, setBaseIdValue] = React.useState(baseId);
    const classes = useDefaultStyles();

    const handleName = (event) => {
        setNameValue(event.target.value);
    };

    const handleBaseId = (event) => {
        setBaseIdValue(event.target.value);
    };

    const handleUpdateButton = () => {
        updateOrganisation(id, {
            name: nameValue,
            baseId: baseIdValue,
        });
    };

    return (
        <div className={classes.generic}>
            <main className={classes.content}>
                <Paper className={classes.paper}>
                    <Grid container direction='column' spacing={1} justify="center" alignItems="center">
                        <Grid item>
                            <Typography className={classes.typography}>Форма изменения организации</Typography>
                        </Grid>
                        <Grid item>
                            <p>Id организации: {id}</p>
                        </Grid>
                        <Grid item>
                            <TextField id="name"
                                       label="Название организации"
                                       type="text"
                                       onChange={handleName}
                                       value={nameValue ? nameValue : ''}
                                       variant="outlined"
                                       fullWidth
                            />
                        </Grid>
                        <Grid item>
                            <TextField id="baseId"
                                       label="Id головной организации"
                                       type="text"
                                       onChange={handleBaseId}
                                       value={baseIdValue ? baseIdValue : ''}
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

export default connect(mapStateToProps, mapDispatchToProps)(UpdateOrganisation);