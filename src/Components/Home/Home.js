import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Box,Typography,Button} from '@material-ui/core';
import NavBar from "../NavBar/NavBar";
import {Link} from "react-router-dom";

let useStyle = makeStyles({

    appContainer: {
        position: 'relative',
        width: '100%',
        height: '100vh',
        backgroundColor: '#1a1c1b'
    },
    infoContainer: {
        position: 'absolute',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white'
    },
    name: {
        fontWeight: '500',

    },
    city: {
        margin: '35px 0px 50px'
    },
    button: {
        padding: '18px 60px',
        fontSize: '1rem',
        border: '3px solid white',
        borderRadius: '0px',
        color: 'white',
        '&:hover': {
            backgroundColor: 'red',
            border: '3px solid red',
        }
    }


})


const Home = (props) => {
    let classes = useStyle();

    return (
        <div className={classes.appContainer}>
            <NavBar items = {props.items}/>
            <Box component='div'  className={classes.infoContainer}>
                <Typography variant='h1' align='center' className={classes.name}>DIMAS BARABAS</Typography>
                <Typography variant='h6' className={classes.city}>PHOTOGRAPHER, KIEV CITY</Typography>
                <Button variant='outlined' className={classes.button} component={Link} to='/portfolio'> VIEW ALL GALLERY</Button>
            </Box>
        </div>
    );
}

export default Home;
