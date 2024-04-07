const React = require("react");
const { getClassNameFactory } = require("@/core/lib");
const { DropZone } = require("@/core/components/DropZone");
const { Section } = require("../section/section");
const styles = require("./columns.css");

const getClassName = getClassNameFactory("Columns", styles);

const Columns = {
  fields: {
    distribution: {
      type: "radio",
      options: [
        {
          value: "auto",
          label: "Auto",
        },
        {
          value: "manual",
          label: "Manual",
        },
      ],
    },
    columns: {
      type: "array",
      getItemSummary: (col, id) =>
        `Column ${id + 1}, span ${
          col.span ? Math.max(Math.min(col.span, 12), 1) : "auto"
        }`,
      arrayFields: {
        span: {
          label: "Span (1-12)",
          type: "number",
          min: 0,
          max: 12,
        },
      },
    },
  },
  defaultProps: {
    distribution: "auto",
    columns: [{}, {}],
  },
  render: ({ columns, distribution }) => {
    return (
      React.createElement(Section, null,
        React.createElement("div", {
          className: getClassName(),
          style: {
            gridTemplateColumns:
              distribution === "manual"
                ? "repeat(12, 1fr)"
                : `repeat(${columns.length}, 1fr)`,
          },
        }, columns.map(({ span }, idx) => (
          React.createElement("div", {
            key: idx,
            style: {
              display: "flex",
              flexDirection: "column",
              gridColumn:
                span && distribution === "manual"
                  ? `span ${Math.max(Math.min(span, 12), 1)}`
                  : "",
            },
          },
            React.createElement(DropZone, {
              zone: `column-${idx}`,
              disallow: ["Hero", "Logos", "Stats"],
            })
          )
        ))
        )
      )
    );
  },
};

module.exports = Columns;
