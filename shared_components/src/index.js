import React from 'react';
import ReactDOM from 'react-dom';

import { Button } from './Button/Button';

ReactDOM.render(
  <Button title="Testing" style={{margin: 10}} />,
  document.getElementById('root')
);

module.hot.accept();
