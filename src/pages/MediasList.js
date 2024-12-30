import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MediaOverlay from '../shared/component/ModifyMediaOverlay';

function MediasList(props) {
  const [medias, setMedias] = useState([]);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const toggleOverlay = () => {
    setIsOverlayOpen(prevState => !prevState);
  };

  const fetchMedias = async () => {
    try {
      const response = await axios.get('http://cmsback-service:12000/medias');
      setMedias(response.data.data);  // Extraire le tableau des médias
      console.log('medias', medias);
    } catch (error) {
      console.error('Erreur lors de la récupération des médias :', error);
    }
  };

  useEffect(() => {
    fetchMedias();
  }, []);

  return (
    <div>
      <h1>Tous les médias :</h1>
      <button onClick={toggleOverlay}>Ajouter un média</button>

      {isOverlayOpen && (
        <MediaOverlay />
      )}

      <div>
        {medias.length > 0 ? (
          <ul>
            {medias.map(media => (
              <li key={media.med_id}>
                <img
                  src={`http://cmsback-service:12000/uploads/${media.med_name}.jpg`}
                  alt={media.med_alt}
                  style={{ width: '100px', height: 'auto' }}
                />
                <p>{media.med_name}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>Aucun média disponible.</p>
        )}
      </div>
    </div>
  );
}

export default MediasList;
