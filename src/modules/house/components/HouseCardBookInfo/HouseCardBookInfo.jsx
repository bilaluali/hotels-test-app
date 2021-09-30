import * as React from 'react';
import {  ListItem, ListItemText, ListItemAvatar } from '@material-ui/core';
import CheckIcon from '@mui/icons-material/CheckCircleOutline';
import classnames from 'classnames';

import useStyles from './styles';

const HouseCardBookInfo = ({
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
            <ListItemAvatar
                className={classes.avatar}
            >
                <CheckIcon />
            </ListItemAvatar>
            <ListItemText
                className={classes.text}
                primary={label}
                primaryTypographyProps={
                    React.useMemo(() => ({ variant: 'body2' }), [])
                }
            />
        </ListItem>
    )
};

export default HouseCardBookInfo;