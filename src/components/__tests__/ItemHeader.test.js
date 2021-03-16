import React from 'react';
import renderer from 'react-test-renderer';
import ItemHeader from '../ItemHeader';

it('renders correctly when there are no items', () => {
    const tree = renderer.create(<ItemHeader />).toJSON();
    expect(tree).toMatchSnapshot();
});
