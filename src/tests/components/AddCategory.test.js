import React from 'react';
import { shallow } from "enzyme"
import AddCategory from "../../components/AddCategory"

describe('Component tests', () => {

    const setCategories = jest.fn(); // It is the same as () => {};
    let wrapper;

    beforeEach( () => {
        jest.clearAllMocks();  // Clear previous simulations, so they do not interfere with each other.
        wrapper = shallow( <AddCategory setCategories={ setCategories }/> );
    });

    test('should render correctly', () => {
        
        expect( wrapper ).toMatchSnapshot();

    });

    test('should change the textbox', () => {
        
        const input = wrapper.find('input');
        const value = 'Hello World'

        input.simulate('change', { target: { value } });

        expect( wrapper.find('p').text().trim() ).toBe( value )

    });

    test('should not post info when submit', () => {
        
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect( setCategories ).not.toHaveBeenCalled();

    })
    
    
})
