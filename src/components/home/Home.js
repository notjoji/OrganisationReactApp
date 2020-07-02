import React from 'react';
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import useDefaultStyles from "../../styles";

const Home = () => {
    const classes = useDefaultStyles();

    return (
        <Container className={classes.container}>
            <Typography className={classes.typography}>
                Home page
            </Typography>
        </Container>
    )
};

export default Home;