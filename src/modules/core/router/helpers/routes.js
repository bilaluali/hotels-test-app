import HousesOverviewRoute from "../../../house/modules/houses-overview/routes/containers/HousesOverviewRoute";
import HouseOverviewRoute from "../../../house/modules/house-overview/routes/containers/HouseOverviewRoute";

const routes = [
    { path: '/houses', component: HousesOverviewRoute },
    { path: '/houses/:id', component: HouseOverviewRoute },
]

export default routes;