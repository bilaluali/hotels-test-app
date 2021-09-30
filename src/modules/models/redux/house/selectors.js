
export const filterBy = (state, criteria) =>
    state.house.entities.filter(
        e => criteria.status.includes(e.status)
    )    