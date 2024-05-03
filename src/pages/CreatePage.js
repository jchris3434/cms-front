// Editeur test jc
import { Puck } from "@measured/puck";
import "@measured/puck/puck.css";
//import Columns from "../widgets/Columns/columns";

// Create Puck component config
const config = {
  components: {
    Columns: {
      render: ({ puck: { renderDropZone } }) => (
        <div>{renderDropZone({ zone: "my-content" })}</div>
      ),
    },
    Titre: {
      fields: {
        children: {
          type: "text",
        },
      },
      render: ({ children }) => {
        return <h1>{children}</h1>;
      },
    },
    Texte: {
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
            { label: "Italique", value: "italic" }, //marche pas encore
            { label: "Souligne", value: "Underline" }, //marche pas encore
          ],
          label: "Style de la police",
        },
        // Ajoutez d'autres champs pour d'autres propriétés de style CSS
      },
      render: ({ text, textStyle, fontSize, color, fontWeight }) => {
        const defaultFontSize = fontSize || 40;

        // Construire l'objet de style en fonction des valeurs des champs de style
        const style = textStyle ? { ...textStyle } : {}; 
        style.fontSize = `${defaultFontSize}px`; 
        if (color) style.color = color;
        if (fontWeight) style.fontWeight = fontWeight;

        return <span style={style}>{text}</span>;
      },
    },
    //Columns: Columns,// test ici import
  },
};

// Describe the initial data
const initialData = {
  content: [],
  root: {},
};

// Save the data to your database
const save = (data) => {};

// Render Puck editor
export default function CreatePage() {
  return <Puck config={config} data={initialData} onPublish={save} />;
}
