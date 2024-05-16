import React from "react";
import { Button as MeasuredButton } from "@measured/puck";

const Buttonwidget = ({
  children,
  onClick,
  variant,
  type,
  size
}) => {
  return (
    <MeasuredButton onClick={onClick} variant={variant} type={type} size={size}>
      {children}
    </MeasuredButton>
  );
};

export default Buttonwidget;
