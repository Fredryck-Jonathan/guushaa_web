/*Style(s)*/
import '../styles/Footer_styles.css'

/*Composant*/ 

/*ajout de react*/
import React from "react";

/*ajout du tableau de la base de données */


function Footer() {
    return (

        <div id='footer' >

            <img src='../guushaa_logo_blanc.png'></img>

            <div className='social'>
                <a href='https://www.youtube.com/@guushaa5111'><ion-icon className='icone_social' name="logo-youtube"></ion-icon></a>
                <a href='https://www.twitch.tv/guushaatv'><ion-icon className='icone_social' name="logo-twitch"></ion-icon></a>
                <a href='https://www.instagram.com/guushaa_the_guush_prod/'><ion-icon className='icone_social' name="logo-instagram"></ion-icon></a>
            </div>
            <p>Diployd 2023 © Copyright</p>

        </div>
    )
}


export default Footer