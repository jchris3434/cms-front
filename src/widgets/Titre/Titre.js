import React from "react";

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
  },
  render: ({ titre, textStyle, fontSize, fontWeight, isBold, isItalic, isUnderline }) => {
    const defaultFontSize = fontSize || 40;
    const style = textStyle ? { ...textStyle } : { fontWeight: '' };
    style.fontSize = `${defaultFontSize}px`;

    if (isBold) {
      style.fontWeight = 'bold';
    }
    if (isItalic) {
      style.fontStyle = 'italic';
    }
    if (isUnderline) {
      style.textDecoration = 'underline';
    }
    
    return <span style={style}>{titre}</span>;
  },
};
