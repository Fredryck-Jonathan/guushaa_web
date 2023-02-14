/*Style(s)*/
import '../styles/Card_music_styles.css'

/*Composant*/ 

/*ajout de react*/
import React from "react";
import { useEffect, useState } from 'react';


/*ajout du tableau de la base de données */


function card_music(props) {

    const buttons = document.getElementsByClassName('button_music')

    const [charged, setCharged] = useState(false);

    useEffect(() => {


        if (buttons.length !== 0 && charged == false) {
            console.log('ça marche mec')
            for (const button of buttons) {
                button.addEventListener('click', event => {
                    console.log(button)
                    const buttonParent = button.parentElement;
                    const allAudioDiv = document.getElementsByClassName('audio_div');
                    for (const audioDiv of allAudioDiv) {
                        console.log(audioDiv.querySelector('audio'))
                        audioDiv.style.display = 'none';
                        audioDiv.querySelector('audio').pause();
                        audioDiv.querySelector('audio').currentTime = 0;
                    }
                    buttonParent.querySelector('.audio_div').style.display = 'flex';
                    buttonParent.querySelector('.audio_div').querySelector('audio').play();
                })
                button.parentElement.querySelector('.fermer_div').addEventListener('click', event => {
                    const allAudioDiv = document.getElementsByClassName('audio_div');
                    for (const audioDiv of allAudioDiv) {
                        console.log(audioDiv.querySelector('audio'))
                        audioDiv.style.display = 'none';
                        audioDiv.querySelector('audio').pause();
                        audioDiv.querySelector('audio').currentTime = 0;
                    }
                })
            }
        
            console.log(charged)
        }
        setCharged(true);

    })



    return (

        <div className='card_music_div'>
            <div className='poster'>
                <img src={props.img}></img>
            </div>
            <div className='details'>
                <h4>{props.nom}</h4>
                <h5>Prod by guushaa</h5>
                <div className='tags'>
                    <span>DeOuf</span>
                </div>
                <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in leo justo. Proin hendrerit augue nec laoreet maximus.</p>
                <button className='button_music'>Ecouter</button>
                <div className='audio_div'>
                    <div className='info_music'>
                        <h5>{props.nom}</h5>
                        <button className='fermer_div'>X</button>

                    </div>
                    <audio src={require(`../assets${props.lien}`)} type="audio/mp3" controls></audio>
                </div>
            </div>

        </div>

    )
}


export default card_music