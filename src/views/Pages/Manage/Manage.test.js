import React from 'react';
import ReactDOM from 'react-dom';
import PageManage from './PageManage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PageManage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
