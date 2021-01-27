import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('<GifGridItem /> tests', () => {

    const title = 'A title';
    const url = 'https://localhost/algo.jpg';
    const wrapper = shallow( 
        <GifGridItem
            title={ title }
            url ={ url }
        /> 
    );
    
    test('should show the component correctly', () => {

        expect( wrapper ).toMatchSnapshot();

    })

    test('should contain a paragraph with title', () => {
        
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( title );

    })

    test('should contain the img´s url and alt equal to those of the props', () => {
        
        const img = wrapper.find('img');
        //console.log( img.props('src') );
        expect( img.prop('src') ).toBe( url );
        expect( img.prop('alt') ).toBe( title );

    })

    test('should have animate__fadeIn class', () => {

        const div = wrapper.find('div');
        const className = div.prop('className');

        console.log( div.prop('className') );

        expect( className.includes('animate__fadeIn') ).toBe( true );
        
    })
    
    
})
