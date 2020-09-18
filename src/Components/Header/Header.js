import React from 'react'
import {Box, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import NavBar from "../NavBar/NavBar";
import photo from '../../img/nyu_jork.jpg'
let useStyle = makeStyles({
    headerContainer: {
        position: 'relative',
        minHeight: '250px',
        width: '100%',
        backgroundImage: `url(${photo})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',



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

    }

})


const Header = (props)=>{
    const classes = useStyle()

    return(
        <Box component='div' className={classes.headerContainer} >
            <NavBar items = {props.data}/>
            <Box component='div'  className={classes.infoContainer}>
                <Typography variant='h1' align='center' className={classes.name}>DIMAS BARABAS</Typography>
            </Box>
        </Box>
    )
}

export default Header;