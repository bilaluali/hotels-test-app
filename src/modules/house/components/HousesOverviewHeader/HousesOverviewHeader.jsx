import * as React from 'react';
import {  ListItemText } from '@material-ui/core';
import classnames from 'classnames';

import useStyles from './styles';

const HousesOverviewHeader = ({
    className,
    ...props
}) => {
    const classes = useStyles();
    return (
        <ListItemText
            {...props}
            className={classnames(className, classes.root)}
            primaryTypographyProps={
                React.useMemo(() => ({ variant: 'h4' }), [])
            }
            secondaryTypographyProps={
                React.useMemo(() => ({ variant: 'body1' }), [])
            }
        />
    )
};

export default HousesOverviewHeader;