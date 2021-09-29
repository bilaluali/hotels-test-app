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
            spacing={2}
            container
        >
            {items.map(item => 
                <Grid
                    item
                    key={item.id}
                    xs={12}
                    md={6}
                    lg={3}
                >
                    <HouseCard {...item}/>
                </Grid>
            )}
        </Grid>
    )
};

export default HousesOverview;