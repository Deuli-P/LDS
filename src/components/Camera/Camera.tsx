'use client'
import { useEffect } from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleUp, faCamera, faImage, faMicrophone } from "@fortawesome/free-solid-svg-icons";

const Camera = () => {
  
  /**
   * Contrainte d'utilisation pour getUserMedia
   * @param {boolean} video flux video
   * @param {boolean} audio flux audio
   */
  const contraints = {
    audio: false,
    video: true
  };

  /**
   * getUserMedia récupére le flux video et/ou audio de l'appareil
   * @param {Object} contrains
   */
  useEffect(()=> {
    const video = document.querySelector("#video-camera")
    navigator.mediaDevices
      .getUserMedia(contraints)
      .then((stream) => {
        /**
         * @videoTracks récupération des informations de l'appareil utilisé
         * @method getVideoTracks [0].label = nom de l'appareil
         */
        // const videoTracks = stream.getVideoTracks();
        // console.log('Flux obtenu avec des contraintes :', contraints);
        // console.log(`Utilisation de l'appareil vidéo : ${videoTracks[0].label}`);
        video.srcObject = stream
        stream.onremovetrack = () => {
          console.log('Flux terminé');
        };
      })
      .catch((error) => {
        if(error.name === "ConstraintNotStatisfiedError") {
          console.error(
            `La résolution ${contraints.video.width.exact}x${contraints.video.height.exact} px n'est pas pris en charge par votre appareil.`,
          );
        } else if (error.name === "PermissionDeniedError") {
          console.error(
            "Les permissions nécessaires pour utliser votre caméra ou votre micro " +
            "n'ont pas été fournies. Vous devez autorisez l'accès à vos appareils "+
            "depuis cette page afin que la démonstration fonctionne.",
          );
        } else {
          console.error(`Erreur getUserMedia : ${error.name}`, error)
        }
      })
  },[])

  let user = 'me'
  
  return (
    <div className='h-500 h-300 border-rouge border-1' >
      {user === 'other' ? 
        <>
          <form className="send-message">
            <button><FontAwesomeIcon icon={faImage} size="lg" className="send-pic"/></button>
            <button><FontAwesomeIcon icon={faCamera} size="lg" className="send-pic"/></button>
            <button><FontAwesomeIcon icon={faMicrophone} size="lg" className="send-pic"/></button>
            <input type="text" name="message" placeholder="Aa"/>
            <button><FontAwesomeIcon icon={faArrowAltCircleUp} size="lg" className="send-pic"/></button>
          </form> 
        </>
        
        : user === 'me' ?
          <>
            <video autoPlay playsInline id="video-camera" className='size-1/2  bg-red-400'></video> 
          </>
          :
          null
      }
    </div>
  )
}

export default Camera
