import { getGifs } from "../../helpers/getGifs"

describe('getGifs fetch tests', () => {
    
    test('should bring 10 elements', async () => {
        
        const gifs = await getGifs('The Office');

        expect( gifs.length ).toBe( 10 );

    });

    test('should bring 0 elements', async () => {
        
        const gifs = await getGifs('');

        expect( gifs.length ).toBe( 0 );

    });

})
