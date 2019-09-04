import React from 'react';
import { AboutMe } from './AboutMe';
import { shallow } from 'enzyme';

describe('AboutMe Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<AboutMe/>)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});