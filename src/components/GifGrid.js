import React, { useState, useEffect } from 'react'
import { GifGreedItem } from './GifGreedItem';

const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    useEffect( () => {
        getGif();
    }, []); // [] executes the function just once, if not the function could execute in an infinite cycle

    const getGif = async() => {

        const endpointURL = 'api.giphy.com/v1/gifs/search';
        const apiKey = 'ZM1Zdt0Rp0gCKqLcsBPPhRwqJDUsEdNb';
        const limit = '10';
        const q = 'Rick+and+Morty'

        const url = `https://${ endpointURL }?q=${q}&limit=${ limit }&api_key=${ apiKey }`;
        const resp = await fetch( url );
        const { data } = await resp.json();

        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url  // ? if the info exists it uses it, if not it ignores it
            }
        })
        console.log(gifs);
        setImages( gifs );
    }

    return (
        <>
            <h3>{ category }</h3>
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