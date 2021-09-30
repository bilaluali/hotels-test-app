import * as React from 'react';
import {  Grid } from '@material-ui/core';
import classnames from 'classnames';

import HouseCard from '../../containers/HouseCard';
import useStyles from './styles';

const HousesOverview = ({
    className,
    items,
    ...props
}) => {
    const classes = useStyles();
    return (
        <Grid
            {...props}
            className={classnames(className, classes.root)}
            spacing={5}
            container
        >
            {items.map(item => 
                <Grid
                    item
                    key={item.id}
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                >
                    <HouseCard {...item}/>
                </Grid>
            )}
        </Grid>
    )
};

export default HousesOverview;