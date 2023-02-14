/*Style(s)*/
import '../styles/header_styles.css'

/*Composant*/ 

/*ajout de react*/
import React from "react";


/*ajout du tableau de la base de données */


function header() {

    return (

        <div className='header_div'>
            <a href='/'className='retour' alt='revenir au menu'>
                <ion-icon name="arrow-back-outline"></ion-icon>
            </a>

            </div>
    )
}


export default header