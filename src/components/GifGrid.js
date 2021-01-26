import React from 'react'

const GifGrid = ({ category }) => {

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

    }
    getGif();

    return (
        <>
            <h3>{ category }</h3>
        </>
    )
}

export default GifGrid;