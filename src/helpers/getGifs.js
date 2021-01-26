export const getGifs = async( category ) => {

    const endpointURL = 'api.giphy.com/v1/gifs/search';
    const apiKey = 'ZM1Zdt0Rp0gCKqLcsBPPhRwqJDUsEdNb';
    const limit = '10';

    const url = `https://${ endpointURL }?q=${ encodeURI( category ) }&limit=${ limit }&api_key=${ apiKey }`;  //encodeURI converts the category name in a valid url, category is our request 
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url  // ? if the info exists it uses it, if not it ignores it
        }
    })

    return  gifs ;
}