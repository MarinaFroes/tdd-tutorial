import React from 'react'
import PersonList from './PersonList'
import { shallow } from 'enzyme'

describe('PersonList', () => {
  let personListWrapper;

  beforeAll(() => {
    personListWrapper = shallow(<PersonList />);
  });

  it('renders a ul element', () => {
    const peopleListUl = personListWrapper.find('ul');

    expect(peopleListUl).toHaveLength(1);
  });
})