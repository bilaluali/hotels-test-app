import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import HouseStatusFilter from '../components/HouseStatusFilter';
import HouseStatus from '../helpers/status';
import * as housesFilterRedux from '../modules/houses-overview/redux/houses-filter-menu';


const HouseStatusFilterContainer = (props) => {

    const dispatch = useDispatch();

    const statuses = useSelector(
        state => housesFilterRedux.selectors.getStatusFilters(state)
    );

    const handleChange = React.useCallback(
        (e, key) => dispatch(
            housesFilterRedux.actionsCreators.filterStatus([
                ...statuses.filter(e => e != key),
                ...e.target.checked ? [key] : []
            ])
        ),
        [statuses, dispatch]
    )
    
    const items = React.useMemo(() => 
        Object.values(HouseStatus)
            .map(e => ({
                key: e,
                label: e,
                size: 'small'
            })),
        [statuses]
    );
    

    return (
        <HouseStatusFilter
            {...props}
            items={items}
            onChange={handleChange}    
        />
    );
};

export default HouseStatusFilterContainer;