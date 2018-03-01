import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import { Button } from 'Components/Button';
import { Divider } from 'Components/Divider';

const Wrapper = styled.div`
  font-family: helvetica;
  padding: 5px;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  incrementCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  resetCounter = () => {
    this.setState({ counter: 0 });
  };

  render() {
    return (
      <Wrapper>
        <h2>{this.props.title}</h2>
        <Button title="Increment" onClickHandler={this.incrementCounter} />
        <Button title="Reset" onClickHandler={this.resetCounter} />
        <Divider width={3} color="lightgrey" />
        <h1>{this.state.counter}</h1>
        <Divider width={3} color="lightblue" />
      </Wrapper>
    );
  }
}

ReactDOM.render(
  <App title="Wow React!" />,
  document.getElementById('root')
);
