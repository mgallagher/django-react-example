import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import Button from 'Components/Button';
import { Divider } from 'Components/Divider';

const Wrapper = styled.div`
  font-family: helvetica;
  padding: 5px;
`;

class App extends React.Component {
  state = {
      missilesFiring: false,
      undoMissiles: false
  }

  fireMissiles = () => {
    this.setState({ missilesFiring: true });
  };

  undoMissiles = () => {
    this.setState({ undoMissiles: true });
  };

  render() {
    return (
      <Wrapper>
        <h1>{this.props.title}</h1>
        <Button title="Fire Missiles" onClickHandler={this.fireMissiles} />
        <Button title="Undo Firing of Missiles" onClickHandler={this.undoMissiles} />
        <Divider width={3} color="lightgrey" />
        { this.state.missilesFiring && <p>Missiles fired</p> }
        { this.state.undoMissiles && <p>lol no</p> }
      </Wrapper>
    );
  }
}

ReactDOM.render(
  <App title="Public React App" />,
  document.getElementById('root')
);
