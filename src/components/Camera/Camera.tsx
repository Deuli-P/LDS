'use client'
import React from 'react'

const Camera = () => {

  const video = document.querySelector('video')
  const contraints = {
    audio: true,
    video: true
  };

  navigator.mediaDevices
    .getUserMedia(contraints)
    .then((stream) => {
      const videoTracks = stream.getVideoTracks();
      console.log('Flux obtenu avec des contraintes :', contraints);
      console.log(`Utilisation de l'appareil vidéo : ${videoTracks[0].label}`);
      stream.onremovetrack = () => {
        console.log('Flux terminé');
      };
      video.srcObject = stream
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
  
  return (
    <div className='camera'>
      <video src="">Video is here</video>
    </div>
  )
}

export default Camera
