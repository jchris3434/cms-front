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
        },
        fontWeight: {
          type: "select",
          options: [
            { label: "Normal", value: "Normal" },
            { label: "Gras", value: "Bold" },
            { label: "Italique", value: "italic" },
            { label: "Souligne", value: "Underline" },
           
          ], 
          label: "Style de la police",
        },
      },
      render: ({ titre, textStyle, fontSize, color, fontWeight }) => {
        const defaultFontSize = fontSize || 40;
        const style = textStyle ? { ...textStyle } : {};
        style.fontSize = `${defaultFontSize}px`;
        if (color) style.color = color;
        if (fontWeight) {
          if (fontWeight === "italic") style.fontStyle = "italic";
          else if (fontWeight === "Underline") style.textDecoration = "underline";
          else style.fontWeight = fontWeight;
        }
        return <span style={style}>{titre}</span>;
      },
  }
