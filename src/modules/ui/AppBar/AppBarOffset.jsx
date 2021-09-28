import React from "react";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
    root: {
        ...theme.mixins.toolbar,
        flexGrow: 1
    }
}));

const AppBarOffset = () => {
    const classes = useStyles();
    return <div className={classes.root} />;
};

export default AppBarOffset;