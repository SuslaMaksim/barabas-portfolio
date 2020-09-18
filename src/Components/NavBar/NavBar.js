import React, {useState} from 'react';
import Box from "@material-ui/core/Box";
import {IconButton} from "@material-ui/core";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import MobileRightMenuSlider from "@material-ui/core/Drawer";
import {makeStyles} from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {Link} from "react-router-dom"
import Typography from "@material-ui/core/Typography";
import PhoneIcon from '@material-ui/icons/Phone';
import DraftsIcon from '@material-ui/icons/Drafts';
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import {Facebook, Twitter, LinkedIn} from "@material-ui/icons";
import InstagramIcon from '@material-ui/icons/Instagram';
import {withRouter} from 'react-router-dom'

let useStyle = makeStyles((theme)=>({
    divaiderContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '300px',
        backgroundColor: 'white',
        height: '100%'
    },
    userName:{
        position: 'relative',
        margin: '25px 0px 40px',
        padding: '8px 50px',
        textTransform: 'uppercase',
        fontWeight: '500',
        '&:before':{
            content: '""',
            display: 'block',
            position: 'absolute',
            width: '15px',
            height: '4px',
            backgroundColor: 'red',
            top: '0px',
            left: '21px',

        },
        '&:after':{
            content: '""',
            display: 'block',
            position: 'absolute',
            width: '4px',
            height: '15px',
            backgroundColor: 'red',
            top: '0px',
            left: '21px',

        }
    },

    iconContainer: {
        color: 'white',
        margin: '50px '

    },
    navList:{
        margin: '0px 18px '
    },
    listItem: {
        padding: '8px 0px 8px 5px',
        marginBottom: '5px',
        transition: 'all .4s linear ',
        '&:hover':{
            backgroundColor: 'red',
            color: 'white',
            transition: 'all .4s linear ',
            '& .MuiSvgIcon-root':{
                color: 'white',
                transition: 'all .4s linear ',
            }
        },


    },
    visitLink: {
        textDecoration: 'none',
        color: '#4d4d4d',
        transition: 'all 0.3s linear',
        '&:hover': {
            color: 'red',
            cursor: 'pointer',
            transition: 'all 0.3s linear'
        }
    },
    visitListItem: {
        padding: '8px 0px 8px 5px',
        marginBottom: '5px',
        '&:last-child':{
            paddingLeft: '0px',
            marginTop: '20px'
        }
    },
    bottomNavigation: {
        margin: '0 auto',
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
        backgroundColor: '#4d4d4d',
        borderRadius:'50%',
        fontSize:"25px",
        padding: '5px',
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

}))


let NavBar = (props)=>{
    let{items} = props;
    console.log(props)
    let classes = useStyle();
    const[state,setState] = useState({left:false});

    const toggleSlider=((slider,open)=>()=>{
        setState({...state,[slider]:open})
    })


    return(
        <Box component='nav'>
            <IconButton className={classes.iconContainer} onClick={toggleSlider('left',true)}>
                <MenuRoundedIcon style={{fontSize: '40px'}} />
            </IconButton>
            <MobileRightMenuSlider open={state.left} anchor='left' onClose={toggleSlider('left',false)}>
                <Box className={classes.divaiderContainer} component='div' onClick={toggleSlider("left",false)}>
                    <Box component='div'>
                        <Typography variant='h4' className={classes.userName}> Barabas</Typography>
                        <List className={classes.navList}>

                            {items.map((item,key)=>{
                                return <ListItem  button key = {key} component={Link} to={item.listLink} className={classes.listItem} >
                                    <ListItemIcon  >{item.listIcon}</ListItemIcon>
                                    <ListItemText className={classes.listItemColor} primary={item.listText}/>
                                </ListItem>
                            })}
                        </List>
                    </Box>


                    <List className={classes.navList}>
                            <ListItem className={classes.visitListItem} >
                                <ListItemIcon style={{color: 'red'}} ><PhoneIcon/> </ListItemIcon>
                                <ListItemText  primary={<a  className={classes.visitLink} href="tel:+380667453327">+380667453327</a>} />
                            </ListItem>
                        <ListItem className={classes.visitListItem} >
                            <ListItemIcon style={{color: 'red'}} ><DraftsIcon/> </ListItemIcon>
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

                </Box>
            </MobileRightMenuSlider>
        </Box>
    )
}

export default withRouter(NavBar)