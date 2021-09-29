import * as React from 'react';
import { Card, CardContent } from '@material-ui/core';
import classnames from 'classnames';

import HouseCardImage from '../HouseCardImage';
import HouseCardInfo from '../HouseCardInfo';
import useStyles from './styles';


const HouseCard = ({
    className,
    primary,
    secondary,
    image,
    status,
    bookable,
    booked,
    ...props
}) => {
    const classes = useStyles();
    return (
        <Card
            {...props}
            className={classnames(className, classes.root)}
        >
            <HouseCardImage
                className={classes.cardImage}
                status={status}
                image={image}
            />
            <CardContent
                className={classes.cardContent}
            >
                <HouseCardInfo
                    primary={primary}
                    secondary={secondary}
                />
            </CardContent>
        </Card>
    )
};

export default HouseCard;