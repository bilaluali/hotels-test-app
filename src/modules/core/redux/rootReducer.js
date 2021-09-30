import { combineReducers } from 'redux';

import * as models from '../../models/redux';
import * as housesFilter from '../../house/modules/houses-overview/redux/houses-filter-menu';

const rootReducer = combineReducers({
    house: models.house.reducers,
    housesFilter: housesFilter.reducers,
});

export default rootReducer;