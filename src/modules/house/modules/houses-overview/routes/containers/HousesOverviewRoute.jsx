import * as React from 'react';
import { Container, Paper, Grid } from '@material-ui/core';

import useHousesQuery from '../hooks/useHousesQuery';
import HousesOverviewPage from '../components/HousesOverviewPage';
import HousesOverview from '../../../../containers/HousesOverview';
import HousesOverviewHeader from '../../../../containers/HousesOverviewHeader';
  
const HousesOverviewRoute = (props) => {

    useHousesQuery();

    return (
        <HousesOverviewPage
            heading={<HousesOverviewHeader />}
            contents={<HousesOverview />}
        />
    )
};

export default HousesOverviewRoute;