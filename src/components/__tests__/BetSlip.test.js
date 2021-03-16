import React from 'react';
import renderer from 'react-test-renderer';
import BetSlip from '../BetSlip';

it('renders correctly when there are no items', () => {
    const tree = renderer.create(<BetSlip />).toJSON();
    expect(tree).toMatchSnapshot();
});
