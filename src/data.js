import React from "react";
import {Apps, AssignmentInd, ContactMail, Home} from "@material-ui/icons";

export let items = [
    {
        listText: 'Home',
        listIcon: <Home/>,
        listLink: '/'
    },
    {
        listText: 'About Me',
        listIcon: <AssignmentInd/>,
        listLink: '/aboutme'
    },
    {
        listText: 'Portfolio',
        listIcon: <Apps/>,
        listLink: '/portfolio'
    },
    {
        listText: 'Services',
        listIcon: <ContactMail/>,
        listLink: '/services'
    },
    {
        listText: 'Contact me',
        listIcon: <ContactMail/>,
        listLink: '/contacts'
    },
]
