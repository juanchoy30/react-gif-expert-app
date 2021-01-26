import React  from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGreedItem } from './GifGreedItem';

const GifGrid = ({ category }) => {

    
    const { data:images, loading } = useFetchGifs( category );
    //{ loading && <p>Loading</p> }  is the same as { loading ? <p>Loading</p> : null } WHEN IS NULL
    return (    
        <>
            <h3 className="animate__animated animate__fadeIn">{ category }</h3>

            { loading && <p className="animate__animated animate__flash">Loading</p> }  
            <div className="card-grid">
                {
                    images.map( img => (
                        <GifGreedItem 
                            key={ img.id }
                            { ...img }
                        />
                    ))
                }
            </div>
        </>

    )
}

export default GifGrid;