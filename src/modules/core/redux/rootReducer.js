import { combineReducers } from 'redux';

import housesReducer from '../../house/modules/houses-overview/redux/reducers';

const rootReducer = combineReducers({
    house: housesReducer,
});

export default rootReducer;