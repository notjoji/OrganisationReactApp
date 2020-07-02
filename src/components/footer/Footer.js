import React from 'react';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import useDefaultStyles from "../../styles";

const Footer = () => {
    const classes = useDefaultStyles();

    return (
        <div className={classes.footer}>
            <Container className={classes.container}>
                <Typography className={classes.copyright}>
                    &copy; 2020 notjoji
                </Typography>
            </Container>
        </div>
    )
};

export default Footer;