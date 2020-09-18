import React from 'react'
import Box from "@material-ui/core/Box";
import {makeStyles} from "@material-ui/core/styles";
import Header from '../Header/Header'
import Grid from "@material-ui/core/Grid";
import {Typography} from "@material-ui/core";
import men from '../../imgServices/photoMen.jpg'
import css from './Services.module.css'

let useStyles = makeStyles({
    servicesBody:{
        width: '100%',
        backgroundColor: '#262626',
        minHeight: '100vh'
    },
    servicesContainer: {
        margin: '0 auto',
        maxWidth: '1920px',
        minHeight: '600px',
    },
    title: {
        margin: '80px 0px 0px',
        color: 'white'
    },
    galleryContainer:{
        margin: '50px 0px 80px'
    },
    textGallery: {
        margin: '12px 20px 0px 120px',
        color: '#fff5e6',

    },
    itemGallery: {
        padding: '12px',

    },
    photoContainer: {
        display: 'flex',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
    },







})


const Services = (props)=>{
    let classes = useStyles();
    let arrey = [1,2,3,4,5,6]

    return(
        <Box component='div' className={classes.servicesBody}>
            <Header data = {props.data}/>
            <Grid container className={classes.servicesContainer} direction='column' >
                <Grid   item md={12}>
                    <Typography className={classes.title} align='center'  variant='h3' > Services</Typography>
                </Grid>
                <Grid   item container md={12} className={classes.galleryContainer}>
                    <Grid item  md={3} sm={12} >
                            <Typography variant='body2' className={classes.textGallery}>As a professional photographer, I offer my clients
                                a wide set of services they can use for the benefit of their business or to
                                make their project look more attractive. Even if you are not a businessman,
                                you can still find what you are looking for at my website. Feel free to browse
                                this page to learn more about photography services I provide.
                            </Typography>
                    </Grid>
                    <Grid item container md={9} sm={12} >
                        {arrey.map(item=>
                        <Grid item  md={4} sm={6} className={classes.itemGallery} >
                            <div className={css.photoContainer}>
                                <img src={men} alt="photo" className={css.photo}/>
                                <span className={css.helperFashion}>Fashion</span>
                                <span component='span' className={`${css.helper} ${css.helperPhotography}`}>Fashion photography</span>
                                <span component='span' className={`${css.helper} ${css.helperModeling}`}>Modeling gencies</span>
                                <span component='span' className={`${css.helper} ${css.helperMakeUp}`}>Make-up for photo shoots</span>

                            </div>
                        </Grid>)
                        }










                    </Grid>
                </Grid>


            </Grid>


        </Box>
    )
}

export default Services;