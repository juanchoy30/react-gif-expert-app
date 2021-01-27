import { useEffect, useState } from "react";
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {  // It cannot be async

        getGifs( category )
            .then( imgs => {
                setState({
                    data: imgs,
                    loading: false
                });
            })

    }, [category]);

    return state;  // { data:[], loading: true };

}