import React from 'react';

export const Divider = (props) => {
  const style = {
    backgroundColor: props.color,
    width: '90%',
    height: props.width,
    margin: 15
  };

  return <div style={style} />;
};
