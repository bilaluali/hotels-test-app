import * as React from 'react';
import { Chip, Typography } from '@material-ui/core';
import { makeStyles } from '@mui/styles';
import classnames from 'classnames';

import getStatusColor from '../../helpers/getStatusColor';
import getStatusLabel from '../../helpers/getStatusLabel';
import useStyles from './styles';

const HouseStatusChip = ({
    className,
    status,
    ...props
}) => {
    const classes = useStyles();
    return (
        <Chip
            {...props}
            className={classnames(className, classes.root)}
            color={getStatusColor(status)}
            size="small"
            label={
            <Typography
                className={classes.label}
                variant="subtitle2"
            >
                {getStatusLabel(status)}
            </Typography>
            }
        />
    )
};

export default HouseStatusChip;