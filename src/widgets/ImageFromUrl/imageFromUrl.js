import { useState, useEffect } from "react";

const ImageFromURL = ({ url }) => {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    const loadImageFromUrl = async () => {
      try {
        const response = await fetch(url);
        const blob = await response.blob();
        const objectUrl = URL.createObjectURL(blob);
        setImageUrl(objectUrl);
      } catch (error) {
        console.error("Erreur lors du chargement de l'image :", error);
      }
    };

    if (url) {
      loadImageFromUrl();
    }

    return () => {
      if (imageUrl) {
        URL.revokeObjectURL(imageUrl);
      }
    };
  }, [url, imageUrl]); // Ajoutez imageUrl comme dépendance ici

  return imageUrl ? <img src={imageUrl} alt="URL" /> : null;
};

export default ImageFromURL;

