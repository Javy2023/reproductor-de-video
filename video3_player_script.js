// Este script genera dinámicamente un diseño mejorado del reproductor
(function() {
    // Crear el contenedor principal del video
    const videoContainer = document.createElement('div');
    videoContainer.className = 'video-container';

    // Crear el elemento de video
    const videoElement = document.createElement('video');
    videoElement.className = 'video-js vjs-modern-skin';
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
            max-width: auto;
            margin: 20px auto;
            border-radius: 20px;
            overflow: hidden;
            background: linear-gradient(145deg, #e0e0e0, #ffffff);
            box-shadow: 0 0 15px 5px rgba(255, 0, 0, 0.5); /* Sombra roja */
            position: relative;
        }

        .video-js {
            background-color: #1a1a1a;
            border-radius: 20px;
        }

        .video-js .vjs-big-play-button {
            background-color: #ff6347;
            border-radius: 50%;
            border: none;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
        }

        .video-js .vjs-big-play-button:hover {
            background-color: #ff4500;
            transform: scale(1.1);
        }

        .video-container::before {
            content: '';
            display: block;
            padding-top: 56.25%; /* 16:9 Aspect Ratio */
        }

        .video-container > video {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }

        @media (max-width: 768px) {
            .video-container {
                margin: 10px auto;
                border-radius: 15px;
            }

            .video-js .vjs-big-play-button {
                width: 60px;
                height: 60px;
            }
        }

        @media (max-width: 480px) {
            .video-container {
                margin: 5px auto;
                border-radius: 10px;
            }

            .video-js .vjs-big-play-button {
                width: 50px;
                height: 50px;
            }
        }
    `;
    document.head.appendChild(style);

})();
