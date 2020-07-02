import React from 'react';
import {connect} from 'react-redux';
import withStyles from "@material-ui/core/styles/withStyles";
import TableCell from "@material-ui/core/TableCell/TableCell";
import useDefaultStyles from "../../../styles";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper/Paper";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TablePagination from "@material-ui/core/TablePagination";
import Container from "@material-ui/core/Container";
import Dialog from "@material-ui/core/Dialog/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions/DialogActions";
import Typography from "@material-ui/core/Typography";
import {
    deleteOrganisation,
    loadOrganisations,
    resetMessageResponse
} from "../../../store/reducers/organisations/actions";
import UpdateOrganisation from "./UpdateOrganisation";
import AddOrganisation from "./AddOrganisation";
import {StyledTableCell} from "../../employees/employeesList/EmployeesList";

const mapStateToProps = state => {
    const {isLoading, organisations, messageResponse} = state.organisations;
    return {
        organisations, messageResponse
    }
};

const mapDispatchToProps = dispatch => {
    return {
        loadOrganisations: () => dispatch(loadOrganisations()),
        deleteOrganisation: (id) => dispatch(deleteOrganisation(id)),
        resetMessageResponse: () => dispatch(resetMessageResponse()),
    }
};

const LIST_VIEW = 'LIST_VIEW';
const UPDATE_VIEW = 'UPDATE_VIEW';
const CREATE_VIEW = 'CREATE_VIEW';

const OrganisationsList = (props) => {
    const {isLoading, organisations, messageResponse, loadOrganisations, deleteOrganisation, resetMessageResponse} = props;

    const [organisationsData, setOrganisationsData] = React.useState(() => loadOrganisations());
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [currentView, setCurrentView] = React.useState(LIST_VIEW);
    const [updateData, setUpdateData] = React.useState({});
    const [openDialog, setOpenDialog] = React.useState(false);
    const classes = useDefaultStyles();

    const handleUpdateButton = (data) => {
        setUpdateData({
            id: data.id,
            name: data.name,
            baseId: data.baseId
        });
        setCurrentView(UPDATE_VIEW);
    };

    const handleCreateButton = () => {
        setCurrentView(CREATE_VIEW);
    };

    const handleDeleteButton = (data) => {
        setOpenDialog(true);
        deleteOrganisation(data.id);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleCloseDialog = () => {
        resetMessageResponse();
        setOpenDialog(false);
        setOrganisationsData(() => loadOrganisations());
    };

    let tableData = organisations
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map(({id, name, baseId}) => (
            <TableRow key={id}>
                <TableCell>{id}</TableCell>
                <TableCell align="center">{name}</TableCell>
                <TableCell align="center">{baseId}</TableCell>
                <TableCell align="center">
                    <Button id={id} variant="contained" color="default"
                            onClick={() => handleUpdateButton({id, name, baseId})}>
                        Изменить
                    </Button>
                </TableCell>
                <TableCell align="center">
                    <Button id={id} variant="contained" color="secondary"
                            onClick={() => handleDeleteButton({id})}>
                        Удалить
                    </Button>
                </TableCell>
            </TableRow>
        ));

    let content = isLoading ?
        <h1>Loading...</h1> :
        organisations && organisations.length !== 0 ?
        <>
            <Paper className={classes.paper}>
                <TableContainer className={classes.container}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Id организации</StyledTableCell>
                                <StyledTableCell align="center">Название организации</StyledTableCell>
                                <StyledTableCell align="center">Id головной организации</StyledTableCell>
                                <StyledTableCell align="center">Изменить</StyledTableCell>
                                <StyledTableCell align="center">Удалить</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {tableData}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 20]}
                    component="div"
                    count={organisations.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
                <Container className={classes.generic}>
                    <Button variant="contained" color="primary" onClick={handleCreateButton}>
                        Добавить новую организацю
                    </Button>
                </Container>
            </Paper>
            <Dialog
                open={openDialog}
                onClose={handleCloseDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Удаление организации"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {messageResponse}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog} color="primary" autoFocus>
                        ОК
                    </Button>
                </DialogActions>
            </Dialog>
        </> :
        <>
            <Container className={classes.container}>
                <Typography className={classes.typography}>
                    В базе данных нет организаций! Произошла ошибка при получении данных!
                </Typography>
            </Container>
        </>;

    let view = currentView === LIST_VIEW ? content :
        currentView === UPDATE_VIEW ?
            <UpdateOrganisation id={updateData.id}
                            name={updateData.name}
                            baseId={updateData.baseId}/> :
            <AddOrganisation/>;

    return (
        <div>
            {view}
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(OrganisationsList);