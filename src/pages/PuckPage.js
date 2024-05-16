// Editeur test jc
import { Puck, DropZone} from "@measured/puck";
import "@measured/puck/puck.css";
import Columns from "../widgets/Columns/columns";
import Buttonwidget from "../widgets/Buttonwidget/Button";
import { TexteConfig }  from '../widgets/text/text';
import { TitreConfig } from '../widgets/Titre/Titre';
import { NavBar } from '../widgets/navbar/navbar';

const config = {

    components: {
      Titre: TitreConfig,
      Texte: TexteConfig, 
      Barre_de_navigation:NavBar,
      Button: {
        fields: {
          title: { type: "text" }
        },
        defaultProps: {
          title: "Bouton",
        },
        render: ({ title}) => {
          return ( 
            <div>
              <Buttonwidget>
                {title}
              </Buttonwidget>
            </div>
          );
        },
      },

      Columns: {
          render: () => {
            return (
              <div>
                <Columns />
              </div>
            );
          },
        },
        Alternative: {
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
export default function CreatePage() {
  return <Puck config={config} data={initialData} onPublish={save} />;
}