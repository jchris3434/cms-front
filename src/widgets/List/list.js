import React from "react";
import { SketchPicker } from "react-color";

export const ListeConfig = {
  fields: {
    items: {
      type: "array",
      arrayFields: {
        title: { type: "text" },
      },
    },
    fontSize: {
      type: "number",
      label: "Taille de la police",
      defaultValue: 20,
      min: 10,
    },
    fontFamily: {
        type: "select",
        label: "Police",
        options: [
          { label: "Arial", value: "Arial, sans-serif" },
          { label: "Georgia", value: "Georgia, serif" },
          { label: "Times New Roman", value: "Times New Roman, serif" },
          { label: "Courier New", value: "Courier New, monospace" },
          { label: "Verdana", value: "Verdana, sans-serif" },
        ],
        defaultValue: "Arial, sans-serif",
      },
    isBold: {
      type: "custom",
      label: "Gras",
      render: ({ name, onChange, value }) => (
        <label style={{ display: "flex", alignItems: "center" }}>
          <input
            type="checkbox"
            checked={value}
            onChange={(e) => onChange(e.currentTarget.checked)}
            style={{ marginRight: "8px" }}
          />
          Gras
        </label>
      ),
    },
    isItalic: {
      type: "custom",
      label: "Italique",
      render: ({ name, onChange, value }) => (
        <label style={{ display: "flex", alignItems: "center" }}>
          <input
            type="checkbox"
            checked={value}
            onChange={(e) => onChange(e.currentTarget.checked)}
            style={{ marginRight: "8px" }}
          />
          Italique
        </label>
      ),
    },
    isUnderline: {
      type: "custom",
      label: "Souligné",
      render: ({ name, onChange, value }) => (
        <label style={{ display: "flex", alignItems: "center" }}>
          <input
            type="checkbox"
            checked={value}
            onChange={(e) => onChange(e.currentTarget.checked)}
            style={{ marginRight: "8px" }}
          />
          Souligné
        </label>
      ),
    },
    textAlign: {
      type: "radio",
      label: "Alignement du texte",
      options: [
        { label: "Gauche", value: "left" },
        { label: "Centré", value: "center" },
        { label: "Droite", value: "right" },
      ],
      defaultValue: "left",
    },
  textColor: {
    type: "custom",
    label: "Couleur du texte",
    render: ({ name, onChange, value }) => (
      <div style={{ display: "flex", alignItems: "center" }}>
        <SketchPicker
          color={value}
          onChangeComplete={(color) => onChange(color.hex)}
        />
      </div>
    ),
  },
},
  render: ({
    items,
    fontSize,
    textColor,
    isBold,
    isItalic,
    isUnderline,
    textAlign,
    fontFamily,
  }) => {
    if (!items) {
      return null;
    }

    const style = {
      fontSize: `${fontSize}px`,
      color: textColor || "#000000",
      fontWeight: isBold ? "bold" : "normal",
      fontStyle: isItalic ? "italic" : "normal",
      textDecoration: isUnderline ? "underline" : "none",
      textAlign: textAlign || "left",
      fontFamily: fontFamily || "Arial, sans-serif",
    };

    return (
      <ul>
        {items.map((item, i) => (
          <li key={i} style={style}>
            {item.title}
          </li>
        ))}
      </ul>
    );
  },
};
