import React, { useState } from 'react';
import './ModifyMediaOverlay.css';
import PropTypes from 'prop-types';

function AddMediaOverlay(props) {
    const [medianame, setMedianame] = useState('');
    const [altmedianame, setAltmedianame] = useState('');
    const [file, setFile] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log('Medianame:', medianame);
        console.log('altmedianame:', altmedianame);
    console.log('File:', file);

        // Vérifie que tous les champs nécessaires sont remplis
        if (!medianame || !file) {
            console.error('Please fill in all required fields.');
            return;
        }

        const formData = new FormData();
        formData.append('name', medianame);
        formData.append('alt', altmedianame);
        formData.append('file', file);

        try {
            const response = await fetch('http://localhost:12000/medias', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                console.log('Media added successfully');
                setMedianame('');
                setAltmedianame('');
                setFile(null);
            } else {
                const errorText = await response.text(); // Lire le texte de l'erreur
                console.error('Failed to add media:', errorText);
            }
        } catch (error) {
            console.error('Error occurred:', error);
        }
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    return (
        <div className={`modifymediaoverlay ${props.isDarkMode ? 'dark' : ''}`}>
            <h3>Ajouter un media</h3>
            <form onSubmit={handleSubmit}>
                <div id="inputs-row">
                    <div className="input-data">
                        <label htmlFor='medianame'>Nom du Media</label><br />
                        <input
                            name='medianame'
                            type="text"
                            placeholder='MonMedia.jpg'
                            value={medianame}
                            onChange={(e) => setMedianame(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-data">
                        <label htmlFor='altmedianame'>Texte alternatif</label><br />
                        <input
                            type="text"
                            name='altmedianame'
                            value={altmedianame}
                            onChange={(e) => setAltmedianame(e.target.value)}
                        />
                    </div>
                    <div className="input-data">
                        <label htmlFor='file'>Choisir un fichier</label><br />
                        <input
                            type="file"
                            name='file'
                            accept="image/*"
                            onChange={handleFileChange}
                            required
                        />
                    </div>
                </div>
                <div id="modifymediabuttons">
                    <button type="button" onClick={() => props.setShowModifyMedia(false)}>Retour</button>
                    <button type="submit">Valider</button>
                </div>
            </form>
        </div>
    );
}

AddMediaOverlay.propTypes = {
    isDarkMode: PropTypes.bool.isRequired,
    setShowModifyMedia: PropTypes.func.isRequired
};

export default AddMediaOverlay;
