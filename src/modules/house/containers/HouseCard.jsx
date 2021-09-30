import * as React from 'react';

import HouseCard from '../components/HouseCard';
import HouseCardAction from './HouseCardAction';


const HouseCardContainer = ({
    name,
    id,
    status,
    booked,
    bookable,
    ...props
}) => {
    return (
        <HouseCard
            {...props}
            status={status}
            primary={id}
            secondary={name}
            Action={HouseCardAction}
            ActionProps={React.useMemo(
                () => ({
                    status,
                    booked,
                    bookable
                }),
                [status, booked, bookable]
            )}
        />
    );
};

export default HouseCardContainer;