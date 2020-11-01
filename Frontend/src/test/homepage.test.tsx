import React from 'react';
import renderer from 'react-test-renderer'; 
import Homepage from '../components/homepage'; 



it("renders when there are no items", () => {
    const tree = renderer.create(<Homepage/>).toJSON(); 
    expect(tree).toMatchSnapshot(); 
}); 


