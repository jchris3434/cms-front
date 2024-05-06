import React from "react";

export const TexteConfig = {
  fields: {
    text: {
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
  render: ({ text, textStyle, fontSize, color, fontWeight }) => {
    const defaultFontSize = fontSize || 40;
    const style = textStyle ? { ...textStyle } : {};
    style.fontSize = `${defaultFontSize}px`;
    if (color) style.color = color;
    if (fontWeight) style.fontWeight = fontWeight;

    return <span style={style}>{text}</span>;
  },
};

 


// Texte: {
//     fields: {
//       text: {
//         type: "text",
//       },
//       fontSize: {
//         type: "number",
//         label: "Taille de la police",
//         defaultValue: 40,
//       },
//       fontWeight: {
//         type: "select",
//         options: [
//           { label: "Normal", value: "Normal" },
//           { label: "Gras", value: "Bold" },
//           { label: "Italique", value: "italic" }, //marche pas encore
//           { label: "Souligne", value: "Underline" }, //marche pas encore
//         ],
//         label: "Style de la police",
//       },
//       // Ajoutez d'autres champs pour d'autres propriétés de style CSS
//     },
//     render: ({ text, textStyle, fontSize, color, fontWeight }) => {
//       const defaultFontSize = fontSize || 40;

//       // Construire l'objet de style en fonction des valeurs des champs de style
//       const style = textStyle ? { ...textStyle } : {}; 
//       style.fontSize = `${defaultFontSize}px`; 
//       if (color) style.color = color;
//       if (fontWeight) style.fontWeight = fontWeight;

//       return <span style={style}>{text}</span>;
//     },
