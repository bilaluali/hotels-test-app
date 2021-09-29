import { combineReducers } from 'redux';

import * as models from '../../models/redux';

const rootReducer = combineReducers({
    house: models.house.reducers,
});

export default rootReducer;