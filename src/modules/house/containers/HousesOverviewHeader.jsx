import * as React from 'react';
import { useSelector } from 'react-redux';

import * as models from '../../models/redux';
import * as housesFilterRedux from '../modules/houses-overview/redux/houses-filter-menu';
import HousesOverviewHeader from '../components/HousesOverviewHeader';
import HouseStatusFilter from './HouseStatusFilter';

const HousesOverviewHeaderContainer = (props) => {
    const criteria = useSelector(
        state => housesFilterRedux.selectors.getFilters(state)
    )
    const houses = useSelector(
        state => models.house.selectors.filterBy(state, criteria)
    );
        
    return (
        <HousesOverviewHeader
            {...props}
            primary={`Houses`}
            secondary={`${houses.length} items`}
            Subheader={HouseStatusFilter}
            SubheaderProps={{}}
        />
    );
};

export default HousesOverviewHeaderContainer;