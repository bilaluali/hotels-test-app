import * as React from 'react';
import { makeStyles } from '@mui/styles';
import { CardActions, Button, Typography } from '@material-ui/core';
import classnames from 'classnames';



const useStyles = makeStyles(unusedTheme => ({
    root: {}
}));


const HouseCardAction = ({
    className,
    label,
    ...props
}) => {
    const classes = useStyles();
    return (
        <Button
            {...props}
            className={classnames(className, classes.root)}
            variant="contained"
            fullWidth
        >
            {label}
        </Button>
    );
};

export default HouseCardAction;
