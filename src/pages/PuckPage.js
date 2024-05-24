import React, { useState, useEffect } from "react";
import { Puck, DropZone } from "@measured/puck";
import "@measured/puck/puck.css";
import Columns from "../widgets/Columns/columns";
import Buttonwidget from "../widgets/Buttonwidget/Button";
import { TexteConfig } from '../widgets/text/text';
import { TitreConfig } from '../widgets/Titre/Titre';
import { NavBar } from '../widgets/navbar/navbar';
import ImageFromURL from "../widgets/ImageFromUrl/imageFromUrl";
import VideoFromUrl from "../widgets/VideoFromUrl/videoFromUrl";
import { ListeConfig } from "../widgets/List/list";
import { ArticleConfig } from "../widgets/Article/article";

// Configuration des composants
const config = {
  components: {
    Titre: TitreConfig,
    Texte: TexteConfig,
    Article: ArticleConfig,
    Liste: ListeConfig,
    Barre_de_navigation: NavBar,
    ImageURL: {
      fields: {
        url: { type: "text", label: "URL de l'image" },
      },
      defaultProps: {
        url: "https://picsum.photos/id/335/630/350",
      },
      render: ({ url }) => {
        return <ImageFromURL url={url} />;
      },
    },
    LienURL: {
      fields: {
        url: { type: "text" },
        linkText: { type: "text" },
      },
      defaultProps: {
        linkText: "Cliquez ici",
      },
      render: ({ url, linkText }) => {
        return (
          <a href={url} target="_blank" rel="noopener noreferrer">
            {linkText}
          </a>
        );
      },
    },
    Video: {
      fields: {
        url: { type: 'text' },
      },
      render: ({ url }) => {
        return (
          <div>
            <VideoFromUrl url={url} />
          </div>
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
      render: ({ title, alignItem }) => {
        return (
          <div>
            <Buttonwidget style={{ textAlign: alignItem }}>
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

// Fonction de sauvegarde en Local storage
const save = (data) => {
  localStorage.setItem("pageData", JSON.stringify(data));
};

// Fonction pour récupérer les données sauvegardées
const load = () => {
  const savedData = localStorage.getItem("pageData");
  return savedData ? JSON.parse(savedData) : { content: [], root: {} };
};

export default function CreatePage() {
  const [data, setData] = useState(load);

  useEffect(() => {
    const handleBeforeUnload = () => {
      save(data);
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [data]);

  return (
    <Puck
      config={config}
      data={data}
      onChange={setData}
      onPublish={save}
    />
  );
}
