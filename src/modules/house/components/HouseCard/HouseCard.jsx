import * as React from 'react';
import { Card, CardContent, CardActions } from '@material-ui/core';
import classnames from 'classnames';


import useStyles from './styles';

  
const HouseCard = ({
    className,
    ...props
}) => {
    const classes = useStyles();
    return (
        <Card
            {...props}
            className={classnames(className, classes.root)}
        >
            <CardContent>

            </CardContent>
            
        </Card>
    )
};

export default HouseCard;