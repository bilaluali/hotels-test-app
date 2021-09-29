const sanitize = payload =>
    payload.reduce((acc, curr) => [
        ...acc,
        ...[{
            ...curr,
            status: !curr.bookable
            ? "UNAVAILABLE"
            : (curr.booked > 0
                ? "BOOKED"
                : "AVAILABLE"
            )
        }]
    ], [])

export default sanitize;