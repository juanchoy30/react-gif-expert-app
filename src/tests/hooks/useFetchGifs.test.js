
import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('useFetchGifs hook tests', () => {

    test('should return the initial state', async() => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'The Office' ) );
        const { data, loading } = result.current;

        await waitForNextUpdate();

        expect( data ).toEqual([]);
        expect( loading ).toBe(true);

    });

    test('should return an array of images and loading be false', async() => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'The Office' ) );
        await waitForNextUpdate();

        const { data, loading } = result.current;

        expect( data.length ).toBe(10);
        expect( loading ).toBe(false);

    })
    
    
})
