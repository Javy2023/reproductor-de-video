// Este script genera dinámicamente solo el diseño del reproductor
(function() {
    // Crear el contenedor principal del video
    const videoContainer = document.createElement('div');
    videoContainer.className = 'video-container';

    // Crear el elemento de video
    const videoElement = document.createElement('video');
    videoElement.className = 'video-js vjs-default-skin vjs-big-play-centered';
    videoElement.setAttribute('controls', '');
    videoElement.setAttribute('id', 'videoPlayer');
    videoElement.setAttribute('preload', 'auto');

    videoContainer.appendChild(videoElement);

    // Insertar el contenedor del video en el body
    document.body.appendChild(videoContainer);

    // Agregar estilos dinámicamente
    const style = document.createElement('style');
    style.textContent = `
        .video-container {
            max-width: 600px;
            margin: auto;
            padding: 0px;
            border-radius: 10px;
            background: linear-gradient(145deg, #ffffff, #f0f0f0);
            box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2), -5px -5px 15px rgba(255, 255, 255, 0.5);
        }

        .video-js {
            background-color: #000;
            border-radius: 15px;
            overflow: hidden;
            box-shadow: 0px 4px 10px rgba(10, 1, 10, 1.25);
        }

        @media (max-width: 768px) {
            .video-container {
                padding: 15px;
            }
        }

        @media (max-width: 480px) {
            .video-container {
                padding: 10px;
            }
        }
    `;
    document.head.appendChild(style);

})();
