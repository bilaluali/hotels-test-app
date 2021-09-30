import * as actions from './actions';

export const filterStatus = payload => ({
    type: actions.FILTER_STATUS,
    payload
});

export const clearFilters = () => ({
    type: actions.CLEAR_FILTERS,
});