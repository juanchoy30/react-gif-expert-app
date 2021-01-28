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

    });

    test('should call the setCategories and clean text-box', () => {

        const value = 'InputChange test'
        const input = wrapper.find('input');

        //1.simulate inputChange
        input.simulate('change', { target: { value } });

        //2.simulate submit
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        //3.call setCategories should have been called
        expect( setCategories ).toHaveBeenCalled();       // Makes sure setCategories has been called
        expect( setCategories ).toHaveBeenCalledTimes(1); // Makes sure setCategories has been called a especific number of times
        expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) );   // Makes sure setCategories has been called as a function

        //4.input value must be an empty string
        expect( input.prop('value') ).toBe('');





        //expect( setCategories ).toHaveBeenCalled();
        
    })
    
    
    
})
