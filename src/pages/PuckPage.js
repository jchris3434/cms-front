// Editeur test jc
import { Puck, DropZone} from "@measured/puck";
import "@measured/puck/puck.css";
//import Columns from "../widgets/Columns/columns";
const config = {
  
  components: {
    Article: {
      fields: {
        title: { type: "text" }, // We need to redefine the `title` field if we want to retain it
        description: { type: "textarea" },
      },
      defaultProps: {
        title: "Modifie ton titre",
        description: "Description",
      },
      render: ({ children, title, description }) => {
        return (
          <div>
            <h1>{title}</h1>
            <p>{description}</p>
            {children}
          </div>
        );
      },
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
        children: {
          type: "text",
        },
      },
      render: ({ children }) => {
        return <span>{children}</span>;
      },
    },
    ZoneDeDepot: { // Déplacer Example en dehors de components
      render: () => {
        return (
          <div>
            <DropZone zone="my-content" />
          </div>
        );
      },
    },
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
export default function PuckPage() {
  return <Puck config={config} data={initialData} onPublish={save} />;
}