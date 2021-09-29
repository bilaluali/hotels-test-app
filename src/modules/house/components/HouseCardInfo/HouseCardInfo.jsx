import * as React from 'react';
import {  ListItemText } from '@material-ui/core';
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
                React.useMemo(() => ({ variant: 'body2' }), [])
            }
            secondaryTypographyProps={
                React.useMemo(() => ({ variant: 'subtitle1' }), [])
            }
        />
    )
};

export default HouseCardInfo;