import * as React from 'react';
import { CircularProgress } from '@material-ui/core';
import classnames from 'classnames';

import useStyles from './styles';

const DEFAULT_IMG = `${process.env.PUBLIC_URL}/placeholder.png`;
  
const HouseCardImage = ({
    className,
    ...props
}) => {
    const classes = useStyles();
    return (
        <figure
            {...props}
            className={classnames(className, classes.root)}
        >
            <img
                className={classes.img}
                alt="House Placeholder"
                src={DEFAULT_IMG}
            />
            <CircularProgress
                className={classes.circularProgress}
                color="primary"
            />
        </figure>
    )
};

export default HouseCardImage;