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
                setTimeout( () => {
                    setState({
                        data: imgs,
                        loading: false
                    });
                }, 2000);
            })

    }, [category]);

        /*
    useEffect( () => {
        getGif( category )
            .then( setImages );  // it is the same as .then( imgs => setImages( imgs ));
    }, [ category ]); // [] executes the function just once, if not the function could execute in an infinite cycle
    */

    return state;  // { data:[], loading: true };

}