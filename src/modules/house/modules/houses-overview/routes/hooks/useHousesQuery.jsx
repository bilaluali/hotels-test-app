import * as React from 'react';
import { useDispatch } from 'react-redux';

import { API_PATH } from '../../../../../api/config';
import * as models from '../../../../../models/redux';

export default function useHousesQuery() {

    const dispatch = useDispatch();

    // NOTE: I just kept the side-effects simple, without using
    // a redux side effect manager. App state was also kept with
    // a simple architecture.
    React.useEffect(() => {
        fetch(API_PATH)
            .then(response => {
                if (response.ok)
                    return response.json()
                throw response
            })
            .then(data => {
                dispatch(
                    models.house.actionsCreators.addEntities(data)
                )
            })
            .catch(error => {
                console.log("ERR_FETCH: Cannot fetch data");
            })
    }, []);

};