import * as React from 'react';
import {  ListItem, ListItemText, ListItemAvatar } from '@material-ui/core';
import FilterIcon from '@mui/icons-material/FilterAlt';
import classnames from 'classnames';

import useStyles from './styles';

const HouseFilterMenuLabel = ({
    className,
    label,
    ...props
}) => {
    const classes = useStyles();
    return (
        <ListItem
            {...props}
            className={classnames(className, classes.root)}
            disableGutters
            disablePadding
        >
            <ListItemText
                className={classes.text}
                primary={label || "Filter"}
                primaryTypographyProps={
                    React.useMemo(() => ({ variant: 'body1' }), [])
                }
            />
             <ListItemAvatar
                className={classes.avatar}
            >
                <FilterIcon />
            </ListItemAvatar>
        </ListItem>
    )
};

export default HouseFilterMenuLabel;