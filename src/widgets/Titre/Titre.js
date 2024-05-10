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
        fontWeight: {
          type: "select",
          options: [
            { label: "Gras", value: "Bold" },            
            { label: "Normal", value: "Normal" },
            { label: "Italique", value: "italic" },
            { label: "Souligne", value: "Underline" },
          ],  
          defaultValue: "Gras",
          label: "Style de la police",
        },
      },
      render: ({ titre, textStyle, fontSize, fontWeight }) => {
        const defaultFontSize = fontSize || 40;
        const style = textStyle ? { ...textStyle } : { fontWeight: 'bold' };
        style.fontSize = `${defaultFontSize}px`;
        if (fontWeight) {
          if (fontWeight === "italic") style.fontStyle = "italic";
          else if (fontWeight === "Underline") style.textDecoration = "underline";
          else style.fontWeight = fontWeight;
        }
        return <span style={style}>{titre}</span>;
      },
  }
