import HouseStatus from './status';

const getStatusActionLabel = (status, booked) => {
    return {
        [HouseStatus.AVAILABLE]: 'Book',
        [HouseStatus.UNAVAILABLE]: 'Not Bookable',
        [HouseStatus.BOOKED]: `Booked for ${booked} days`,
    }[HouseStatus[status]]
};

export default getStatusActionLabel;