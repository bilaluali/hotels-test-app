import * as React from 'react';

import HouseCard from '../components/HouseCard';


const HouseCardContainer = ({
    id,
    name,
    ...props
}) => {
    return (
        <HouseCard
            {...props}
            primary={id}
            secondary={name}
        />
    );
};

export default HouseCardContainer;