import React from 'react';
import CardGeneric from '../generic/CardGeneric';
import IconButton from '../generic/IconButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PageCard.css';



function PageCard(props) {


    // Function to handle redirection when card is clicked
    const redirect = () => {
        window.location.href = props.redirect;
    };

  return (
    <CardGeneric className='PageCard' isDarkMode={props.isDarkMode} onClick={redirect}>
        <p className='titleText'>{props.pageName}</p>

        <div className='pagePreviewPlaceholder'> </div>

        <div className='pageCardButtons'>
            {props.modifyButton !== null ? <IconButton icon='bi-pencil-square' buttonAction={props.modifyButton}/>: null}
            {props.deleteButton !== null ? <IconButton icon='bi-x-circle' buttonAction={props.deleteButton}/> : null}
        </div>
    </CardGeneric>
  );
}

export default PageCard;
