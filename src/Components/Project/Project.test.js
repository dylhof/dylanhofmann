import React from 'react';
import { Project } from './Project';
import { shallow } from 'enzyme';

describe('Project component', () => {
  let wrapper;
  const mockproject = {
    title: 'mockproject',
    git: 'www.mockgit.com',
    url: 'www.mockproject.com',
    description: 'this is a mock project',
    thumbnail: 'www.thumbnail.com'
  }
  beforeEach(() => {
    wrapper = shallow(<Project {...mockproject}/>)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});