import React from 'react';
import styled from 'styled-components';

export const StyledButton = styled.button`
  color: white;
  border-radius: 2px;
  background-color: #008CBA;
  font-size: 16px;
  padding: 10px 24px;
  transition-duration: 0.4s;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  border: none;
  margin: 5px;

  &:hover {
    background-color: #33a2c6;
  }
`;

const Button = ({ onClickHandler, title, style }) => {
  return (
    <StyledButton onClick={onClickHandler} style={style}>
      {title}
    </StyledButton>
  );
};

export default Button;
