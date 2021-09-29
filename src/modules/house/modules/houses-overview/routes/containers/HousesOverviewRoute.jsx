import * as React from 'react';
import { Container, Paper, Grid } from '@material-ui/core';

import useHousesQuery from '../hooks/useHousesQuery';
import HousesOverviewPage from '../components/HousesOverviewPage';
import HousesOverview from '../../../../containers/HousesOverview';
  
const HousesOverviewRoute = (props) => {

    useHousesQuery();

    return (
        <HousesOverviewPage
            contents={<HousesOverview />}
        />
    )
};

export default HousesOverviewRoute;