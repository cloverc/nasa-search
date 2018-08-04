import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import App from '../src/App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('it renders a title of NASA Search', () => {
  const wrapper = shallow((
    <App />
  ));
  const title = wrapper.find('h1.main-title').text();
  expect(title).toEqual('NASA Search');
});
