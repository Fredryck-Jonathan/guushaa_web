/*Style(s)*/
import '../styles/Presentation_album_styles.css'

/*Composant*/ 

/*ajout de react*/
import React from "react";


/*ajout du tableau de la base de données */


function presentation_album(props) {

    if(props.video != undefined ){
        console.log(props.title, props.video)



        return (


            <div className='presentation_section' >

                <div className='presentation'>
                    <div className='img_presentation'>
                        <img src={props.img}></img>
                    </div>

                    <video className='background_album_video' autoPlay loop muted>
                        <source src={require(`../assets/${props.video}`)} type='video/mp4'></source>
                    </video>

                    <div className="text_presentation">
                        <h4 className='title_presentation'>{props.title}</h4>
                        <p className='description_presentation'>{props.description}</p>
                        <p className='date_presentation'>{props.date}</p>
                    </div>
                </div>



            </div>
        )
    }
}


export default presentation_album