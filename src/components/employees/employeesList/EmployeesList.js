import React from 'react';
import {connect} from "react-redux";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import TablePagination from "@material-ui/core/TablePagination";
import withStyles from "@material-ui/core/styles/withStyles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import useDefaultStyles from "../../../styles";
import {deleteEmployee, loadEmployees, resetMessageResponse} from "../../../store/reducers/employees/actions";
import UpdateEmployee from "./UpdateEmployee";
import AddEmployee from "./AddEmployee";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";

const mapStateToProps = state => {
    const {isLoading, employees, messageResponse} = state.employees;
    return {
        isLoading, employees, messageResponse
    }
};

const mapDispatchToProps = dispatch => {
    return {
        loadEmployees: () => dispatch(loadEmployees()),
        deleteEmployee: (id) => dispatch(deleteEmployee(id)),
        resetMessageResponse: () => dispatch(resetMessageResponse()),
    }
};

export const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
    },
}))(TableCell);

const LIST_VIEW = 'LIST_VIEW';
const UPDATE_VIEW = 'UPDATE_VIEW';
const CREATE_VIEW = 'CREATE_VIEW';

const EmployeesList = (props) => {
    const {isLoading, employees, messageResponse, loadEmployees, deleteEmployee, resetMessageResponse} = props;

    const [employeesData, setEmployeesData] = React.useState(() => loadEmployees());
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
            organisationId: data.organisationId,
            supervisorId: data.supervisorId
        });
        setCurrentView(UPDATE_VIEW);
    };

    const handleCreateButton = () => {
        setCurrentView(CREATE_VIEW);
    };

    const handleDeleteButton = (data) => {
        setOpenDialog(true);
        deleteEmployee(data.id);
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
        setEmployeesData(() => loadEmployees());
    };

    let tableData = employees
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map(({id, name, organisationId, supervisorId}) => (
        <TableRow key={id}>
            <TableCell>{id}</TableCell>
            <TableCell align="center">{name}</TableCell>
            <TableCell align="center">{organisationId}</TableCell>
            <TableCell align="center">{supervisorId}</TableCell>
            <TableCell align="center">
                <Button id={id} variant="contained" color="default"
                        onClick={() => handleUpdateButton({id, name, organisationId, supervisorId})}>
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
        employees && employees.length !== 0 ?
        <>
            <Paper className={classes.paper}>
                <TableContainer className={classes.container}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Id сотрудника</StyledTableCell>
                                <StyledTableCell align="center">Имя сотрудника</StyledTableCell>
                                <StyledTableCell align="center">Id организации</StyledTableCell>
                                <StyledTableCell align="center">Id руководителя</StyledTableCell>
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
                    count={employees.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
                <Container className={classes.generic}>
                    <Button variant="contained" color="primary" onClick={handleCreateButton}>
                        Добавить нового сотрудника
                    </Button>
                </Container>
            </Paper>
            <Dialog
                open={openDialog}
                onClose={handleCloseDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Удаление сотрудника"}</DialogTitle>
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
                    В базе данных нет сотрудников! Произошла ошибка при получении данных!
                </Typography>
            </Container>
        </>;

    let view = currentView === LIST_VIEW ? content :
        currentView === UPDATE_VIEW ?
            <UpdateEmployee id={updateData.id}
                            name={updateData.name}
                            organisationId={updateData.organisationId}
                            supervisorId={updateData.supervisorId}/> :
            <AddEmployee/>;

    return (
        <div>
            {view}
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeesList);