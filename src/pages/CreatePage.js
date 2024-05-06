import React from 'react';
import { Puck } from "@measured/puck";
import "@measured/puck/puck.css";
import { TexteConfig }  from '../widgets/text/text'; // Make sure the import path is correct

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
    Texte: TexteConfig, // Use the imported Texte component here
  },
};

const initialData = {
  content: [],
  root: {},
};

const save = (data) => {};

export default function CreatePage() {
  return <Puck config={config} data={initialData} onPublish={save} />;
}
