import { combineReducers } from 'redux';

import * as models from '../../models/redux';
import * as houseOverviewFilter from '../../house/modules/houses-overview/redux/houses-overview-filter';

const rootReducer = combineReducers({
    house: models.house.reducers,
    houseOverviewFilter: houseOverviewFilter.reducers,
});

export default rootReducer;