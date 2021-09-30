import HouseStatus from './status';

const getStatusColor = status => {
    return {
        [HouseStatus.AVAILABLE]: 'success',
        [HouseStatus.UNAVAILABLE]: 'error',
        [HouseStatus.BOOKED]: 'primary',
    }[status]
};

export default getStatusColor;