import React from 'react';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import {makeStyles,withStyles} from "@material-ui/core/styles";
import {TextField }from "@material-ui/core";

const InputField = withStyles({
    root:{
        '& label.Mui-focused':{
            color: 'tomato'
        },
        '& label': {
            color: 'tomato'
        },
        '& .MuiOutlinedInput-root':{
            '& fieldset':{
                borderColor: 'white'
            },
            '&:hover fieldset':{
                borderColor: 'white'
            },
            '&.Mui-focused fieldset':{
                borderColor: 'white'
            }
        }
    }

})(TextField)

const useStyle = makeStyles({
    button: {
        marginTop: '10px',
        padding: '18px 80px',
        fontSize: '1rem',
        border: '3px solid white',
        borderRadius: '3px',
        color: 'white',
        '&:hover': {
            backgroundColor: 'red',
            border: '3px solid red',
        }
    },
    gridItems: {
        padding: '10px 10px 10px 0px',
        '& .MuiInputBase-input ':{
            color: 'white'
        }

    },
    innerGrid:{
        '&:first-child':{
            paddingRight: '15px'
        },
        '&:last-child':{
            paddingLeft: '15px'
        },


    }


})


let Form = (props)=>{
    let classes = useStyle()

    return(

        <Grid  item container md={8} >
            <Grid item container md={12} className={classes.gridItems} >
                <Grid item md={6} className={classes.innerGrid}>
                    <InputField
                        fullWidth={true}
                        label = 'Name'
                        variant='outlined'
                        margin='dense'
                        size='medium'
                    />


                </Grid>
                <Grid item md={6} className={classes.innerGrid}>
                    <InputField
                        fullWidth={true}
                        label = 'Phone'
                        variant='outlined'
                        margin='dense'
                        size='medium'
                    />
                </Grid>
            </Grid>
            <Grid item md={12} className={classes.gridItems}>
                <InputField
                    fullWidth={true}
                    label = 'Email'
                    variant='outlined'
                    margin='dense'
                    size='medium'
                />
            </Grid>
            <Grid item md={12} className={classes.gridItems}>
                <InputField
                    fullWidth={true}
                    label = 'Message'
                    multiline
                    variant='outlined'
                    margin='dense'
                    size='medium'
                    rows={12}
                />
            </Grid>
            <Grid item md={12} className={classes.gridItems}>
                <Grid item md={6}>
                    <Button type='submit' className={classes.button} >SEND MESSAGE</Button>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Form;