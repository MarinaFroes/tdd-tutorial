import React from 'react'
import PersonList from './PersonList'
import { shallow } from 'enzyme'

describe('PersonList', () => {

  it('renders a ul element', () => {
    const personListWrapper = shallow(<PersonList />);
    const peopleListUl = personListWrapper.find('ul');

    expect(peopleListUl).toHaveLength(1);
  });

  it('renders no li elements when no people exist', () => {
    const people = [];
    const personListWrapper = shallow(<PersonList people={people}/>);
    const peopleListItems = personListWrapper.find('li');

    expect(peopleListItems).toHaveLength(0);
  });
})