import * as React from 'react';
import { AppBar as MuiAppBar } from '@material-ui/core';
import { makeStyles } from '@mui/styles';
import classnames from 'classnames';

import AppBarLogo from './AppBarLogo';
import AppBarOffset from './AppBarOffset';

import useStyles from './styles';
  
const AppBar = ({
    className,
    ...props
}) => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <MuiAppBar
                {...props}
                className={classnames(className, classes.root)}
                position="fixed"
                color="inherit"
            >
                <AppBarLogo />
            </MuiAppBar>
            <AppBarOffset />
        </React.Fragment>
    )
};

export default AppBar;