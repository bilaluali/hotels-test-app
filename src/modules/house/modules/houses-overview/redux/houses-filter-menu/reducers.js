import { FILTER_STATUS, CLEAR_FILTERS } from './actions';
import HouseStatus from '../../../../helpers/status';


export const initialState = {
  status: [...Object.values(HouseStatus)],
  // TO-DO: Filter by id, name...
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_STATUS:
      return {...state, status: [...action.payload]}
    case CLEAR_FILTERS:
      return initialState
    default:
      return state;
  }
};

export default reducer;
 