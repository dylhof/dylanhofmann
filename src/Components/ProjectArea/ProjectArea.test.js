import React from 'react';
import ProjectArea from './ProjectArea';
import { shallow } from 'enzyme';

jest.mock('uuid', () => jest.fn(() => '1'));

describe('ProjectArea component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ProjectArea/>)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
})