import React from 'react';
import enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from '../components/header'; 

enzyme.configure({adapter:new Adapter})

describe('Header', () => {
    it('should show link', () => {
        const wrapper =shallow( <Header/>);
        const text = wrapper.find('div nav div a');
        expect(text.text()).toBe('MovieSelector');
    })
    
})
