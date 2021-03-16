import React from 'react';
import renderer from 'react-test-renderer';
import Item from '../ItemHeader';

it('renders correctly when there are no items', () => {
    const tree = renderer.create(<Item />).toJSON();
    expect(tree).toMatchSnapshot();
});
