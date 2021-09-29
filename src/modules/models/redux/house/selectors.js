import filter from 'lodash/filter';

export const filterBy = (state, criteria) => 
    filter(state.house, criteria)