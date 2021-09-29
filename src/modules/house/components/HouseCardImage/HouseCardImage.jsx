import * as React from 'react';
import classnames from 'classnames';

import HouseStatusChip from '../HouseStatusChip';
import useStyles from './styles';

const DEFAULT_IMG = process.env.PUBLIC_URL + "/placeholder.png"
  
const HouseCardImage = ({
    className,
    status,
    image,
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
                alt="House Image"
                src={image || DEFAULT_IMG}
            />
            <HouseStatusChip
                className={classes.chip}
                status={status}
            />
        </figure>
    )
};

export default HouseCardImage;