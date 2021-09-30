import HouseStatus from './status';

const getStatusLabel = status => {
    return {
        [HouseStatus.AVAILABLE]: 'available',
        [HouseStatus.UNAVAILABLE]: 'unavailable',
        [HouseStatus.BOOKED]: 'booked',
    }[status]
};

export default getStatusLabel;