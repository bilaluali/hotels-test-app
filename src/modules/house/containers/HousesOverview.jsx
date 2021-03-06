import * as React from 'react';
import { useSelector } from 'react-redux';

import HousesOverview from '../components/HousesOverview';
import * as models from '../../models/redux';
import * as housesFilterRedux from '../modules/houses-overview/redux/houses-filter-menu';


const HousesOverviewContainer = (props) => {
    const criteria = useSelector(
        state => housesFilterRedux.selectors.getFilters(state)
    )
    const houses = useSelector(
        state => models.house.selectors.filterBy(state, criteria)
    );
        
    return (
        <HousesOverview {...props} items={houses}/>
    );
};

export default HousesOverviewContainer;