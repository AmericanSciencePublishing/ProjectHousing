import React from 'react';
import {shallow} from 'enzyme';
import Header from './Header';

it('should renders a navigation bar', ()=>{
  const wrapper = shallow(<Header />);

  expect(wrapper).toMatchSnapshot();

  wrapper.find('Nav').children().forEach(
    (node) => {
      node.simulate('click');
      expect(wrapper).toMatchSnapshot();
    }
  );
})
