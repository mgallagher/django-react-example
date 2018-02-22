import React from 'react';
import ReactDOM from 'react-dom';

import { Button } from 'Components/Button';
import { Divider } from 'Components/Divider';

const App = ({ title }) => (
  <div>
    <h2>{title}</h2>
    <Divider width={3} color="lightgrey" />
    <Divider width={3} color="lightblue" />
    <Button title="Do Nothing" />
  </div>
);

ReactDOM.render(
  <App title="Wow React" />,
  document.getElementById('root')
);
