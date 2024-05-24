import React from "react";
import { SketchPicker } from "react-color";

export const ArticleConfig = {
  fields: {
    title: { type: "text" },
    description: { type: "textarea" },
    titleFontSize: {
      type: "number",
      label: "Taille de la police du titre",
      defaultValue: 40,
      min: 20,
    },
    titleColor: {
      type: "custom",
      label: "Couleur du titre",
      render: ({ name, onChange, value }) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <SketchPicker
            color={value}
            onChangeComplete={(color) => onChange(color.hex)}
          />
        </div>
      ),
    },
    titleIsBold: {
      type: "custom",
      label: "Titre en Gras",
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
    titleIsItalic: {
      type: "custom",
      label: "Titre Italique",
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
    titleIsUnderline: {
      type: "custom",
      label: "Titre Souligné",
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
    titleTextAlign: {
      type: "radio",
      label: "Alignement du titre",
      options: [
        { label: "Gauche", value: "left" },
        { label: "Centré", value: "center" },
        { label: "Droite", value: "right" },
      ],
      defaultValue: "left",
    },
    titleFontFamily: {
      type: "select",
      label: "Police du titre",
      options: [
        { label: "Arial", value: "Arial, sans-serif" },
        { label: "Georgia", value: "Georgia, serif" },
        { label: "Times New Roman", value: "Times New Roman, serif" },
        { label: "Courier New", value: "Courier New, monospace" },
        { label: "Verdana", value: "Verdana, sans-serif" },
      ],
      defaultValue: "Arial, sans-serif",
    },
    descriptionFontSize: {
      type: "number",
      label: "Taille de la police de la description",
      defaultValue: 20,
      min: 10,
    },
    descriptionColor: {
      type: "custom",
      label: "Couleur de la description",
      render: ({ name, onChange, value }) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <SketchPicker
            color={value}
            onChangeComplete={(color) => onChange(color.hex)}
          />
        </div>
      ),
    },
    descriptionIsBold: {
      type: "custom",
      label: "Description en Gras",
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
    descriptionIsItalic: {
      type: "custom",
      label: "Description Italique",
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
    descriptionIsUnderline: {
      type: "custom",
      label: "Description Souligné",
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
    descriptionTextAlign: {
      type: "radio",
      label: "Alignement de la description",
      options: [
        { label: "Gauche", value: "left" },
        { label: "Centré", value: "center" },
        { label: "Droite", value: "right" },
      ],
      defaultValue: "left",
    },
    descriptionFontFamily: {
      type: "select",
      label: "Police de la description",
      options: [
        { label: "Arial", value: "Arial, sans-serif" },
        { label: "Georgia", value: "Georgia, serif" },
        { label: "Times New Roman", value: "Times New Roman, serif" },
        { label: "Courier New", value: "Courier New, monospace" },
        { label: "Verdana", value: "Verdana, sans-serif" },
      ],
      defaultValue: "Arial, sans-serif",
    },
  },
  defaultProps: {
    title: "Modifie ton titre",
    description: "Description",
  },
  render: ({
    children,
    title,
    description,
    titleFontSize,
    titleColor,
    titleIsBold,
    titleIsItalic,
    titleIsUnderline,
    titleTextAlign,
    titleFontFamily,
    descriptionFontSize,
    descriptionColor,
    descriptionIsBold,
    descriptionIsItalic,
    descriptionIsUnderline,
    descriptionTextAlign,
    descriptionFontFamily,
  }) => {
    const titleStyle = {
      fontSize: `${titleFontSize}px`,
      color: titleColor || "#000000",
      fontWeight: titleIsBold ? "bold" : "normal",
      fontStyle: titleIsItalic ? "italic" : "normal",
      textDecoration: titleIsUnderline ? "underline" : "none",
      textAlign: titleTextAlign || "left",
      fontFamily: titleFontFamily,
    };

    const descriptionStyle = {
      fontSize: `${descriptionFontSize}px`,
      color: descriptionColor || "#000000",
      fontWeight: descriptionIsBold ? "bold" : "normal",
      fontStyle: descriptionIsItalic ? "italic" : "normal",
      textDecoration: descriptionIsUnderline ? "underline" : "none",
      textAlign: descriptionTextAlign || "left",
      fontFamily: descriptionFontFamily,
    };

    return (
      <div>
        <h1 style={titleStyle}>{title}</h1>
        <p style={descriptionStyle}>{description}</p>
        {children}
      </div>
    );
  },
};
