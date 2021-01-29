import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import GifGrid from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs')

describe('<GifGrid /> tests', () => {

    const category = 'X files'
    
    test('should render the component correctly', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow(<GifGrid category={ category }/>);
        expect( wrapper ).toMatchSnapshot();

    });

    test('should show images when loading useFetchGifs', () => {

        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/any/thing.jpg',
            title: 'Anything'
        },
        {
            id: '123',
            url: 'https://localhost/any/thing.jpg',
            title: 'Anything'
        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });
        
        const wrapper = shallow(<GifGrid category={ category }/>);

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe(false);
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );

    })
    
    



})
