import React from "react";

export const Color = (props) => {
  const { color, children } = props;
  const colorStyle = {
    color
  };
  return <p style={colorStyle}>{children}</p>;
};
