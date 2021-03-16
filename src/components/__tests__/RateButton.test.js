import React from 'react';
import renderer from 'react-test-renderer';
import RateButton from '../RateButton';


it('renders correctly when there are no items', () => {
    const tree = renderer.create(<RateButton />).toJSON();
    expect(tree).toMatchSnapshot();
});
