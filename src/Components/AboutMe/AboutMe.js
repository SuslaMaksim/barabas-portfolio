import React from 'react'
import {Box, Button, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Header from '../Header/Header'
import {Link} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import photoAvatar from '../../img/photoAvatar.jpg'
let useStyle = makeStyles({
    aboutMeContainer: {
        width: '100%',
        backgroundColor: '#262626',
        minHeight: '100vh'

    },
    infoContainer: {
        margin: '0 auto',
        maxWidth: '960px',
        minHeight: '300px'
    },
    avatarContainer: {
        display: 'flex',
        maxWidth: '420px',
        maxHeight: '500px',
        overflow: 'hidden',
        marginBottom: '30px'
    },
    avatar: {
        display: 'block',
        width: '100%',
        height: '100%'

    },
    aboutMeDescription: {
        maxWidth: '420px',
    },
    button: {
        padding: '18px 80px',
        fontSize: '1rem',
        border: '3px solid white',
        borderRadius: '0px',
        color: 'white',
        '&:hover': {
            backgroundColor: 'red',
            border: '3px solid red',
        }
    },
    info: {
        color: '#fff5e6',
        marginBottom: '20px',
        '&:last-child':{
            marginBottom: '0px',
        }
    }

})


const AboutMe = (props)=>{
const classes = useStyle()

    return(
        <Box component='div' className={classes.aboutMeContainer}>
            <Header data = {props.data}/>
            <Grid container className={classes.infoContainer} direction='column' >
                <Grid   item md={12}>
                    <Typography align='center'  variant='h3' style={{margin: '80px 0px 0px',color: 'white'}}> About Me</Typography>
                </Grid>
                <Grid item container style={{margin: '50px 0px 80px'}} >
                    <Grid item container md={6} sm={12} alignItems='center' direction='column' style={{padding:'12px'}} >

                            <Box component='div' className={classes.avatarContainer}>
                                <img src={photoAvatar} alt="photoAvatar" className={classes.avatar}/>
                            </Box>

                            <Button variant='outlined' className={classes.button} component={Link} to='/contacts'> GET IN TOUCH</Button>
                    </Grid>
                    <Grid  item container md={6} sm={12}  style={{padding:'12px'}} justify='center' >
                        <Box component='div' className={classes.aboutMeDescription}>
                            <Typography className={classes.info} variant='body2'>I strive for making high quality photos available
                                to everyone from designers and CG artists to average viewers. I truly believe
                                that great works of photography are based on certain skills and techniques.
                                There are a lot of factors that make an ordinary photo an outstanding one.
                                But nowadays even ordinary photos are not available for wide usage without
                                paying a certain fee.
                            </Typography>

                            <Typography className={classes.info} variant='body2'>However, there are some photographers and artists,
                                both enthusiastic and professional, who believe that creativity should
                                not be restricted by money or law. I am one of them, and I am glad to
                                offer you my photos and a lot of other works of my portfolio without
                                any charge. It means you can always get my latest photos taken all around the
                                world without paying a cent
                            </Typography>

                            <Typography className={classes.info}  variant='body2'> Awards:</Typography>
                            <Typography className={classes.info}  variant='body2'> 2015 – MAGNUM 30 under 30, Winner</Typography>
                            <Typography className={classes.info}  variant='body2'> 2014 – The Other Hundred, 1st Prize</Typography>
                            <Typography className={classes.info}  variant='body2'> 2014 – American Photography 30, Selected Winner</Typography>
                            <Typography className={classes.info}  variant='body2'> 2013 – Leica Oskar Barnack Award, Winner Newcomer</Typography>
                            <Typography className={classes.info}  variant='body2'> 2012 – PDN Photo Annual - Student Work, Winner</Typography>
                            <Typography className={classes.info}  variant='body2'> 2012 – AOP Student Awards, Finalist</Typography>

                            <Typography className={classes.info}  variant='body2'> My work has appeared in
                                printed and online magazines – National Geographic Magazine, The New York Times, GEO Germany,
                                GEO France, Bloomberg Businessweek, Neu Zurcher Zeitung, Leica Fotografie International, Leica
                                M Magazine, NEON, Marie Claire Italy, FOTO8, Reader’s Digest, National Geographic Traveler.
                            </Typography>


                        </Box>
                    </Grid>
                </Grid>



            </Grid>
        </Box>
    )
}

export default AboutMe;