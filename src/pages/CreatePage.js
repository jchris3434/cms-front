// Editeur test jc
import { Puck } from "@measured/puck";
import "@measured/puck/puck.css";
//import Columns from "../widgets/Columns/columns";

// Create Puck component config
const config = {
  components: {
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
        children: {
          type: "text",
        },
      },
      render: ({ children }) => {
        return <span>{children}</span>;
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