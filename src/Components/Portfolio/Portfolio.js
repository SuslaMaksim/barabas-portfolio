import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Header from "../Header/Header";
import Grid from "@material-ui/core/Grid";
import {Typography} from "@material-ui/core";

const useStyles = makeStyles({
    portfolioBody: {
        width: '100%',
        backgroundColor: '#262626',
        minHeight: '100vh'
    },
    portfolioContainer:{
        maxWidth: '1920px',
        backgroundColor: 'grey',
        minHeight: '250px'
    },
    title: {
        margin: '80px 0px 50px',
        color: 'white'
    },
    allCategoriesContainer:{
        margin: '0px 0px 80px',
        backgroundColor: 'white',
        minHeight: '150px'
    }



})


let Portfolio = (props)=>{
    let classes = useStyles();

    return(
        <Box component='div' className={classes.portfolioBody}>
            <Header data={props.data}/>
            <Box className={classes.portfolioContainer}>
                <Grid container direction='column'>
                    <Grid   item md={12} sm={12}>
                        <Typography className={classes.title} align='center'  variant='h3' >Portfolio</Typography>
                    </Grid>
                    <Grid item container md={12} className={classes.allCategoriesContainer}>
                        <Grid item container md={3} className={classes.navCategories}>

                        </Grid>
                        <Grid item container md={9} className={classes.galleryContainer}>

                        </Grid>


                    </Grid>

                </Grid>
            </Box>


        </Box>

    )
}

export default Portfolio;