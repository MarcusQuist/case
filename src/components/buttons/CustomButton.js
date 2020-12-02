import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'linear-gradient(45deg, #2193b0 30%, #6dd5ed 90%)',
    borderRadius: '100%',
    border: 0,
    color: 'white',
    height: 48,
    boxShadow: '3px 3px 7px 1px rgb(0 0 0 / 72%)',
    width: '100px',
    height: '100px'
  },
  label: {
    textTransform: 'capitalize',
  },
}));

export default function CustomButton({ text, func, style }) {
  const classes = useStyles();
    return (
      <div className="button-container"
           style={style}>
        <Button 
          classes={{
            root: classes.root,
            label: classes.label, 
          }}
          variant="contained"
          onClick={func}
          >
          {text}
        </Button>
      </div>
    );
  }