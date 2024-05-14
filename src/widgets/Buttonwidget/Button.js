import React from "react";
import { Button as MeasuredButton } from "@measured/puck";

const Buttonwidget = ({
  children,
  onClick,
  variant,
  type
}) => {
  return (
    <MeasuredButton onClick={onClick} variant={variant} type={type}>
      {children}
    </MeasuredButton>
  );
};

export default Buttonwidget;
