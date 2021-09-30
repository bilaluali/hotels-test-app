const sanitize = payload =>
    payload.reduce((acc, curr) => [
        ...acc,
        ...[{
            ...curr,
            status: !curr.bookable
            ? "unavailable"
            : (curr.booked > 0
                ? "booked"
                : "available"
            )
        }]
    ], [])

export default sanitize;