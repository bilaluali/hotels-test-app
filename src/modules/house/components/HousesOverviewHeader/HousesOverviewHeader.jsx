import * as React from 'react';
import {  ListItemText,Divider } from '@material-ui/core';
import classnames from 'classnames';

import useStyles from './styles';

const HousesOverviewHeader = ({
    className,
    primary,
    secondary,
    Subheader,
    SubheaderProps,
    ...props
}) => {
    const classes = useStyles();
    return (
        <div
            {...props}
            className={classnames(className, classes.root)}
        >
            <ListItemText
                primary={primary}
                secondary={secondary}
                primaryTypographyProps={
                    React.useMemo(() => ({ variant: 'h4' }), [])
                }
                secondaryTypographyProps={
                    React.useMemo(() => ({ variant: 'body1' }), [])
                }
            />
            <Divider
                className={classes.divider}
            />
            <Subheader
                className={classes.subheader}
                {...SubheaderProps}
            />
        </div>
    )
};

export default HousesOverviewHeader;