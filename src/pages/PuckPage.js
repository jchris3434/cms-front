// Editeur test jc
import { Puck, DropZone} from "@measured/puck";
import "@measured/puck/puck.css";
import Columns from "../widgets/Columns/columns";
import Buttonwidget from "../widgets/Buttonwidget/Button";


const config = {

    components: {

      Liste: {
        fields: {
          Elements: {
            type: "array",
            arrayFields: {
              title: { type: "text" },
            },
            getItemSummary: (item) => item.title || "Modifie",
          },
        },
        render: ({ items }) => {
          if (!items) {
            return null; 
          }
        
          return (
            <ul>
              {items.map((item, i) => (
                <li key={i}>{item.title}</li>
              ))}
            </ul>
          );
        },
      },

      Bouton: {
        fields: {
          title: { type: "text" },
          alignItem: {
            type: "radio",
            options: [
              { label: "Left", value: "left" },
              { label: "Right", value: "right" },
            ],
          },
        },
        defaultProps: {
          title: "Bouton",
        },
        
        render: ({ title, alignItem}) => {
          return ( 
            <div>
              <Buttonwidget
              style={{ alignItem }}>
                {title} 
              </Buttonwidget>
             
            </div>
          );
        },
      },

      Colonne: {
          render: () => {
            return (
              <div>
                <Columns />
              </div>
            );
          },
        },

    Article: {
      fields: {
        title: { type: "text" }, 
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

    Texte: {
      fields: {
        children: {
          type: "text",
        },
      },
      render: ({ children }) => {
        return <span>{children}</span>;
      },
    },
    Container: { 
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
export default function CreatePage() {
  return <Puck config={config} data={initialData} onPublish={save} />;
}