import React  from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
//import { getGif } from '../helpers/getGifs';
//import { GifGreedItem } from './GifGreedItem';

const GifGrid = ({ category }) => {

    
    //const [images, setImages] = useState([]);
    const { loading } = useFetchGifs();


    /*
    useEffect( () => {
        getGif( category )
            .then( setImages );  // it is the same as .then( imgs => setImages( imgs ));
    }, [ category ]); // [] executes the function just once, if not the function could execute in an infinite cycle
    */
    return (
        <>
            <h3>{ category }</h3>

            { loading? 'Loading...' : 'Data Loaded' }
            {/* <div className="card-grid">
                {
                    images.map( img => (
                        <GifGreedItem 
                            key={ img.id }
                            { ...img }
                        />
                    ))
                }
            </div> */}
        </>

    )
}

export default GifGrid;