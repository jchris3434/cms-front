import React from 'react';
import { Puck } from "@measured/puck";
import "@measured/puck/puck.css";
import { TexteConfig }  from '../widgets/text/text'; // Make sure the import path is correct
import { TitreConfig } from '../widgets/Titre/Titre';

const config = {
  components: {
    Columns: {
      render: ({ puck: { renderDropZone } }) => (
        <div>{renderDropZone({ zone: "my-content" })}</div>
      ),
    },
    Titre: TitreConfig,
    Texte: TexteConfig, 
  },
};

const initialData = {
  content: [],
  root: {},
};

const save = (data) => {
  
};

export default function CreatePage() {
  return <Puck config={config} data={initialData} onPublish={save} />;
}
