/*Style(s)*/
import '../styles/Music_page_styles.css'
/*Composant*/ 


import Presentationalbum from '../components/Presentation_album'
import Card_music from '../components/card_music'
import Header from '../components/Header'


/*ajout de react*/
import React from "react";
import { useEffect, useState } from 'react';

/*ajout du tableau de la base de données */








    function music_page() {

    let pageUrl = window.location.pathname;

            const dataAlbum = () => {
            const [data_album, setData_album] = useState([]);
            const [isMounted, setIsMounted] = useState(false);
            useEffect(() => {
                if (!isMounted) {
                        fetch(`http://localhost/api_guushaaweb/albums`)
                        .then((res) => res.json())
                        .then(
                            (resultat) => { setData_album(resultat); }
                        )
                    setIsMounted(true);
                }}, [isMounted])
        return data_album
    }
    const albumsData = dataAlbum();

    function searchAlbum(){
        let albumsArray = {};
        for (let album of albumsData) {
            if (album.lien == pageUrl) { 
                albumsArray = album
            }
        }
        return albumsArray

    }

    const albumArray = searchAlbum();





    const dataSong = () => {
        const [data, setData] = useState([]);
        const [isMounted, setIsMounted] = useState(false);
        useEffect(() => {
            if (!isMounted) {
                fetch(`http://localhost/api_guushaaweb/songs`)
                    .then((res) => res.json())
                    .then(
                        (resultat) => { setData(resultat); }
                    )
                    setIsMounted(true);
            }
})
        
        return data
    }
    
    const songsData = dataSong();

    
    function searchMusic(){
        
        let musicArray = new Array();
        
        for (let music of songsData) {

            if (music.album == pageUrl) {
                
                musicArray.push(music)

            }
        

        
        }
    
        


        return musicArray
    
    }
    
    const musicArray_phase3 = searchMusic();
        console.log(musicArray_phase3)
        console.log(albumArray)

    return (

        <div id='phase_2_page'>

            <Header></Header>
            <Presentationalbum img={`../${albumArray.img}`} title={albumArray.title} description={albumArray.description} date={albumArray.date} video={albumArray.video} key={albumArray.title}></Presentationalbum>
            <div className='gallery_music'>

                {musicArray_phase3.map((music) => (

                    <Card_music img={`../${albumArray.img}`} id={music.id} nom={music.nom} lien={music.lien} album={music.album} key={music.id}></Card_music>
                    
                ))}

      


            </div>




        </div>
    )
}

console.log('Home')

export default music_page