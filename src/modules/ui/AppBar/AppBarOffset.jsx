import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
    offset: {
        flexGrow: 1
    }
}));

const AppBarOffset = () => {
    const classes = useStyles();
    return <div className={classes.offset} />;
};

export default AppBarOffset;