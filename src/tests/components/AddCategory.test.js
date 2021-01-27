import React from 'react';
import { shallow } from "enzyme"
import AddCategory from "../../components/AddCategory"

describe('Component tests', () => {

    const setCategories = () => {};

    test('should render correctly', () => {
        
        const wrapper = shallow( <AddCategory setCategories={ setCategories }/> );
        expect( wrapper ).toMatchSnapshot();


    })
    
})
