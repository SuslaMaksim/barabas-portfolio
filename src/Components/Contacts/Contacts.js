import React from 'react'
import Box from "@material-ui/core/Box";
import {makeStyles} from "@material-ui/core/styles";
import Header from '../Header/Header'
import Grid from "@material-ui/core/Grid";
import {Typography} from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import PhoneIcon from "@material-ui/icons/Phone";
import ListItemText from "@material-ui/core/ListItemText";
import DraftsIcon from "@material-ui/icons/Drafts";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import {Facebook, LinkedIn, Twitter} from "@material-ui/icons";
import InstagramIcon from "@material-ui/icons/Instagram";
import LocationOnIcon from '@material-ui/icons/LocationOn'
import Form from "./Form";


const useStyles = makeStyles({
    contactsBody: {
        width: '100%',
        backgroundColor: '#262626',
        minHeight: '100vh'
    },
    contactsContainer:{
        margin: '0 auto',
        maxWidth: '1024px',
        minHeight: '600px',
    },
    title: {
        margin: '80px 0px 50px',
        color: 'white'
    },
    subTitle:{
        color: '#fff5e6'
    },
    formContainer: {
        margin: '50px 0px 80px',
        width: '100%',
   },
    navList:{
        margin: '0px 0px '
    },

    visitListItem: {
        padding: '8px 0px 8px 5px',
        '&:last-child':{
            padding: '0px',

        }
    },
    visitLink: {
        textDecoration: 'none',
        color: '#fff5e6',
        transition: 'all 0.3s linear',
        '&:hover': {
            textDecoration: 'underline',
            cursor: 'pointer',
            transition: 'all 0.3s linear'
        }
    },
    bottomNavigation: {
        margin: '0 auto',
        backgroundColor: '#262626',
        paddingLeft: '0px',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems:"center",
    },
    bottomNavigationAction: {

        color: 'white',
        minWidth: '40px',
        '&.MuiBottomNavigationAction-iconOnly':{
            padding: '0px 5px 0px 5px',
        }
    },
    bottomNavigationActionIcon: {
        backgroundColor: '#404040',
        borderRadius:'50%',
        fontSize:"25px",
        padding: '10px',
        transition: 'all .3s linear'

    },

    iconTwitter: {
        '&:hover': {
            backgroundColor: '#99ddff'
        }
    },
    iconLinkedin: {
        '&:hover': {
            backgroundColor: '#0099e6'
        }
    },
    iconInstagramm: {
        '&:hover': {
            backgroundColor: '#ff99cc'
        }
    },
    iconFacebook: {
        '&:hover': {
            backgroundColor: '#005ce6'
        }
    }

})


const Contacts = (props)=>{
    const classes = useStyles();

    return(

        <Box component='div' className={classes.contactsBody}>
            <Header data = {props.data}/>
            <Box className={classes.contactsContainer}>
                <Grid container direction='column'>
                    <Grid   item md={12}>
                            <Typography className={classes.title} align='center'  variant='h3' > Contact Me</Typography></Grid>
                    <Grid   item md={12}>
                        <Typography align='center'  variant='body1' className={classes.subTitle}>
                            You can contact me any way that is convenient for you. I am available 24/7 via fax,
                            email or telephone. You can also use a quick contact form located on this page to ask
                            a question about my services and projects I work on. I would be happy to answer your
                            questions or offer any help.
                        </Typography>
                    </Grid>
                    <Grid   item container md={12} className={classes.formContainer} >
                        <Form/>

                        <Grid item container md={4} justify='center'>

                            <List className={classes.navList}>
                                <ListItem className={classes.visitListItem} >
                                    <ListItemIcon style={{color: 'white'}} > <LocationOnIcon/> </ListItemIcon>
                                    <ListItemText  primary='Kiev' className={classes.visitLink} />
                                </ListItem>
                                <ListItem className={classes.visitListItem} >
                                    <ListItemIcon style={{color: 'white'}} ><PhoneIcon/> </ListItemIcon>
                                    <ListItemText  primary={<a  className={classes.visitLink} href="tel:+380667453327">+380667453327</a>} />
                                </ListItem>
                                <ListItem className={classes.visitListItem} >
                                    <ListItemIcon style={{color: 'white'}} ><DraftsIcon/> </ListItemIcon>
                                    <ListItemText  primary={<a className={classes.visitLink} href="barabas@gmail.com">barabas@gmail.com</a>} />
                                </ListItem>
                                <ListItem className={classes.visitListItem}   >
                                    <BottomNavigation width='auto'  className={classes.bottomNavigation}>
                                        <BottomNavigationAction
                                            className={classes.bottomNavigationAction}
                                            icon = {<Twitter className={`${classes.bottomNavigationActionIcon} ${classes.iconTwitter}`} />}
                                            href='https://www.facebook.com/profile.php?id=100004980878034'
                                            target='_blank'

                                        />
                                        <BottomNavigationAction
                                            className={classes.bottomNavigationAction}
                                            icon = {<LinkedIn className={`${classes.bottomNavigationActionIcon} ${classes.iconLinkedin}`} />}
                                            href='https://www.linkedin.com/in/%D0%BC%D0%B0%D0%BA%D1%81%D0%B8%D0%BC-%D1%81%D1%83%D1%81%D0%BB%D0%B0-260a5a197/'
                                            target='_blank'

                                        />
                                        <BottomNavigationAction
                                            className={classes.bottomNavigationAction}
                                            icon = {<InstagramIcon className={`${classes.bottomNavigationActionIcon} ${classes.iconInstagramm}`} />}
                                            href='https://github.com/SuslaMaksim'
                                            target='_blank'

                                        />
                                        <BottomNavigationAction
                                            className={classes.bottomNavigationAction}
                                            icon = {<Facebook className={`${classes.bottomNavigationActionIcon} ${classes.iconFacebook}`}/>}
                                            href='https://github.com/SuslaMaksim'
                                            target='_blank'

                                        />

                                    </BottomNavigation>

                                </ListItem>
                            </List>

                        </Grid>

                    </Grid>

                </Grid>


            </Box>
        </Box>
    )
}

export default Contacts;