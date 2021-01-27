import React from 'react';
import { shallow } from "enzyme"
import AddCategory from "../../components/AddCategory"

describe('Component tests', () => {

    const setCategories = () => {};
    const wrapper = shallow( <AddCategory setCategories={ setCategories }/> );

    test('should render correctly', () => {
        
        expect( wrapper ).toMatchSnapshot();

    });

    test('should change the textbox', () => {
        
        const input = wrapper.find('input');
        const value = 'Hello World'

        input.simulate('change', { target: { value } });

        expect( wrapper.find('p').text().trim() ).toBe( value )

    });
    
})
