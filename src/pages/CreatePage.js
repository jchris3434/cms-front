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
    ZoneTexte: {
      fields: {
        text: {
          type: "text",
        },
        fontSize: {
          type: "number",
          label: "Taille de la police",
        },
        // color: {
        //   type: "color",
        //   label: "Couleur du texte",
        // },
        fontWeight: {
               type: "select",
          options: [
            { label: "Normal", value: "Normal" },
            { label: "Bold", value: "Bold" },
            { label: "italic", value: "italic" },
          ],
        
          label: "Poids de la police",
        },
        // Ajoutez d'autres champs pour d'autres propriétés de style CSS
      },
      render: ({ text, textStyle, fontSize, color, fontWeight }) => {
        // Construire l'objet de style en fonction des valeurs des champs de style
        const style = textStyle ? { ...textStyle } : {}; // Copie des styles pour éviter de modifier l'objet d'origine
        if (fontSize) style.fontSize = `${fontSize}px`;
        if (color) style.color = color;
        if (fontWeight) style.fontWeight = fontWeight;
        // Ajoutez d'autres propriétés de style ici si nécessaire

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
