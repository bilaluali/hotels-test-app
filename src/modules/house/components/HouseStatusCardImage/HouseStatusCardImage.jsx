import * as React from 'react';
import classnames from 'classnames';

import HouseStatusChip from '../HouseStatusChip';
import useStyles from './styles';

const DEFAULT_SRC = process.env.PUBLIC_URL + "/placeholder.png"
  
const HouseStatusCardImage = ({
    className,
    status,
    src,
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
                src={src || DEFAULT_SRC}
            />
            <HouseStatusChip
                className={classes.chip}
                status={status}
            />
        </figure>
    )
};

export default HouseStatusCardImage;