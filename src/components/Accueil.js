/*Style(s)*/
import '../styles/Accueil_styles.css'

/*Composant*/ 

/*ajout de react*/
import React from "react";

/*ajout du tableau de la base de données */


function Accueil() {
    return (

        <div id='accueil' >
            <video id='background-video' autoPlay loop muted>
                <source src={require('../assets/background_video.mp4')} type='video/mp4'></source>
            </video>
            <div id='page_accueil'>
                <div id='logo_guushaa'>
                    <img src='../guushaa_logo_blanc.png'></img>
                    <p>Bienvenue sur le site de Guushaa</p>

                </div>

                <div id='partie_music'>
                    <h3>Decouvre mes musiques</h3>
                    <div id='gallery_boutons_music'>
                        <div className='bouton_music'>
                            <a href='/phase01'> Phase 01</a>
                            <video className='video_button_music' autoPlay loop muted>
                                <source src={require('../assets/phase_1_video.mp4')} type='video/mp4'></source>
                            </video>
                        </div>
                    
                        <div className='bouton_music'>
                            <video className='video_button_music' autoPlay loop muted>
                                <source src={require('../assets/phase_2_video.mp4')} type='video/mp4'></source>
                            </video> 
                            <a href='/phase02'> Phase 02</a>
                        </div>

                        <div className='bouton_music'>
                            <video className='video_button_music' autoPlay loop muted>
                                <source src={require('../assets/phase_3_video.mp4')} type='video/mp4'></source>
                            </video> 
                            <a href='/phase03'> Phase 03</a>
                        </div>

                        <div className='bouton_music'>
                            <video className='video_button_music' autoPlay loop muted>
                                <source src={require('../assets/projet_gamma_video.mp4')} type='video/mp4'></source>
                            </video> 
                            <a href='/projetGamma'> Projet GAMMA</a>
                        </div>


                    </div>

                </div>
            </div>


        </div>
    )
}


export default Accueil