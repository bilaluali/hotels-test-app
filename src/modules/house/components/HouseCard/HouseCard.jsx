import * as React from 'react';
import { Card, CardContent, CardActions } from '@material-ui/core';
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
    Action,
    ActionProps,
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
                    className={classes.houseCardInfo}
                    primary={primary}
                    secondary={secondary}
                />
            </CardContent>
            <CardActions
                className={classes.cardActions}
            >
                <Action {...ActionProps}/>
            </CardActions>
        </Card>
    )
};

export default HouseCard;