import enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';
import Content from '../components/content'; 
import React from 'react';


enzyme.configure({adapter: new Adapter()}); 

let wr

describe('App', () => {
    it('should contain', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.contains(<Content />)).toBe(true); 

    })
} )