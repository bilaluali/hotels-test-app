import { ADD_ENTITIES, REMOVE_ENTITIES } from '../entities/actions';


export const initialState = {
    house: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ENTITIES:
      return { ...state, house: [...action.payload] }
    case REMOVE_ENTITIES:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
 