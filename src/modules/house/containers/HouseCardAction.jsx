import * as React from 'react';

import HouseStatus from '../helpers/status';
import HouseCardAction from '../components/HouseCardAction';
import HouseCardBookInfo from '../components/HouseCardBookInfo';

const HouseCardActionContainer = ({
    status,
    booked,
    bookable,
    ...props
}) => {

    const actionProps = React.useMemo(
        () => ({
            [HouseStatus.AVAILABLE]: {
                label: "Book",
            },
            [HouseStatus.UNAVAILABLE]: {
                label: "Not Bookable",
                disabled: true,
            },
            [HouseStatus.BOOKED]: {
                label: `Booked for ${booked} days`,
            },
        }[status]),
        [status]
    );

    const Component = status === HouseStatus.BOOKED
        ? HouseCardBookInfo
        : HouseCardAction

    return (
        <Component {...props} {...actionProps}/>
    );
};

export default HouseCardActionContainer;