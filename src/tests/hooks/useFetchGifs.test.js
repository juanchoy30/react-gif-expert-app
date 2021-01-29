
import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('useFetchGifs hook tests', () => {

    test('should return the initial state', () => {
        
        const { result } = renderHook( () => useFetchGifs( 'The Office' ) );
        const { data, loading } = result.current;

        expect( data ).toEqual([]);
        expect( loading ).toBe(true);

    })
    
})
