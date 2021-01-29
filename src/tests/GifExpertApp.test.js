import React from 'react';
import { shallow } from 'enzyme';
import GifExpertApp from '../GifExpertApp';


describe('<GifExpertApp /> Tests', () => {

    test('should render the component correctly', () => {
            
        const wrapper = shallow( <GifExpertApp /> );
        expect( wrapper ).toMatchSnapshot();

    });
    
    test('should show a list of categories', () => {
        
        const categories = ['Mr Robot', 'X Files'];
        const wrapper = shallow( <GifExpertApp defaultCategories={ categories } /> );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe( categories.length );

    });

})
