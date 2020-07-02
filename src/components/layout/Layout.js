import React from 'react';
import Header from "../header/Header";
import Footer from "../footer/Footer";
import {connect} from "react-redux";
import Container from '@material-ui/core/Container'
import useDefaultStyles from "../../styles";

const mapStateToProps = state => {
    return {

    }
};

const mapDispatchToProps = dispatch => {
    return {

    }
};

const Layout = (props) => {
    const {children} = props;

    const classes = useDefaultStyles();

    return (
        <>
            <div className={classes.generic}>
                <main className={classes.content}>
                    <Container maxWidth="lg" className={classes.container}>
                        <Header/>
                        {children}
                        <Footer/>
                    </Container>
                </main>
            </div>
        </>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);