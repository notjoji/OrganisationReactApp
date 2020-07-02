import makeStyles from '@material-ui/core/styles/makeStyles'

var useDefaultStyles = makeStyles(theme => ({
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        padding: theme.spacing(4)
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    typography: {
        textAlign: 'center',
        fontSize: 24,
    },
    footer: {
        margin: '10px',
    },
    copyright: {
        textAlign: 'center',
    },
    generic: {
        alignContent: 'center',
        justifyContent: 'center',
        display: 'flex',
        margin: '10px'
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
}));

export default useDefaultStyles;