import React from 'react';
import { shallow } from 'enzyme';

import App from '../src/App';

it('it renders a title of NASA Search', () => {
  const wrapper = shallow((
    <App />
  ));
  const title = wrapper.find('h1.main-title').text();
  expect(title).toEqual('NASA Search');
});
