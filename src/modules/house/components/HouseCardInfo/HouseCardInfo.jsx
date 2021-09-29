import * as React from 'react';
import { makeStyles } from '@mui/styles';
import {  ListItemText, Typography } from '@material-ui/core';
import classnames from 'classnames';

import useStyles from './styles';

const HouseCardInfo = ({
    className,
    primary,
    secondary,
    ...props
}) => {
    const classes = useStyles();
    return (
        <ListItemText
            {...props}
            className={classnames(className, classes.root)}
            primary={`Id: ${primary}`}
            secondary={secondary}
            primaryTypographyProps={
                React.useMemo(() => ({ variant: 'body1' }), [])
            }
            secondaryTypographyProps={
                React.useMemo(() => ({ variant: 'h5' }), [])
            }
        />
    )
};

export default HouseCardInfo;