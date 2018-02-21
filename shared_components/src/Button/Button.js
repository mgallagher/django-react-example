import React from 'react';

export const Button = ({ onClickHandler, title, style }) => {
  return (
    <button onClick={onClickHandler} style={style}>
      {title}
    </button>
  );
};
