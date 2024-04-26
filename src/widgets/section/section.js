const React = require("react");
const { getClassNameFactory } = require("@/core/lib");
const styles = require("./section.css");

const getClassName = getClassNameFactory("Section", styles);

const Section = ({
  children,
  className,
  padding = "0px",
  maxWidth = "1280px",
  style = {},
}) => {
  return React.createElement("div", {
    className: `${getClassName()}${className ? ` ${className}` : ""}`,
    style: {
      ...style,
      paddingTop: padding,
      paddingBottom: padding,
    },
  },
    React.createElement("div", {
      className: getClassName("inner"),
      style: { maxWidth },
    },
      children
    )
  );
};

module.exports = Section;
