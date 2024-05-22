import React from "react";
import { SketchPicker } from "react-color";

export const TitreConfig = {
  fields: {
    titre: {
      type: "text",
    },
    fontSize: {
      type: "number",
      label: "Taille de la police",
      defaultValue: 40,
      min: 40,
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
      defaultValue: "Gauche",
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

  render: ({ titre, textStyle, fontSize, fontWeight, isBold, isItalic, isUnderline, textAlign, textColor }) => {
    const defaultFontSize = fontSize || 40;
    const style = {
      ...textStyle,
      fontSize: `${defaultFontSize}px`,
      fontWeight: isBold ? 'bold' : 'normal',
      fontStyle: isItalic ? 'italic' : 'normal',
      textDecoration: isUnderline ? 'underline' : 'none',
      textAlign: textAlign || 'left',
      color: textColor || '#000000', // Default to black if no color is selected
    };

    return <div style={style}>{titre}</div>;
  },
};
