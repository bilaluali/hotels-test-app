import * as React from 'react';
import { useSelector } from 'react-redux';

import HousesOverview from '../components/HousesOverview';
import * as models from '../../models/redux';


const HousesOverviewContainer = (props) => {
    const houses = useSelector(
        state => models.house.selectors.filterBy(state, {})
    );
        
    return (
        <HousesOverview {...props} items={houses}/>
    );
};

export default HousesOverviewContainer;