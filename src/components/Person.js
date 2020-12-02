import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Divider from '@material-ui/core/Divider';
import { deepPurple } from '@material-ui/core/colors';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      margin: '0 10px',
      maxWidth: 360,
      backgroundColor: '#007cc7',
      boxShadow: '3px 3px 7px 1px rgb(0 0 0 / 72%)'
    },
    purple: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
      },
    listItemText: {
            color: '#eefbfb'
    }
}));

/**
 * Takes the array of hobbies and returns a ListItemText
 * object for each hobby.
 * The name argument is used to make a unique key for the li-component.
 * @param {array} hobbies 
 * @param {string} name 
 */
const fillOccupations = (name, hobbies) =>{
    if(hobbies){
        let occupations = hobbies.map(occupation => {
            occupation = occupation.toLowerCase();
            occupation = occupation.charAt(0).toUpperCase() + occupation.slice(1);
            return <ListItemText key={name+hobbies[0]} primary={occupation}  />
        });
        return occupations;
    }
}

export default function Person({ name, age, hobbies, work }) {
    const classes = useStyles();
  return (
    <List className={classes.root}>
        <ListItem>
            <ListItemAvatar>
                <Avatar className={classes.purple}>{name.charAt(0)}</Avatar>
            </ListItemAvatar>
            <ListItemText classes={{secondary:classes.listItemText}} primary={name} secondary={"Age: " + age}/>
        </ListItem>
        <Divider component="li" />
        <ListItem>
            <ListItemText primary="Hobbies: "/>
            {fillOccupations(name, hobbies)}
        </ListItem>
    </List>
  );
}