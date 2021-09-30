import { FILTER_STATUS, CLEAR_FILTERS } from './actions';
import HouseStatus from '../../../../helpers/status';


export const initialState = {
  filters: {
    status: [...Object.values(HouseStatus)],
    // TO-DO: filter by name, id...
    // name: "",
    // id: ""
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_STATUS:
      return { ...state, filters: [...action.payload] }
    case CLEAR_FILTERS:
      return initialState
    default:
      return state;
  }
};

export default reducer;
 