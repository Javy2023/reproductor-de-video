// Este script genera dinámicamente el reproductor de video y sus controles
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

    // Fuente del video
    const sourceElement = document.createElement('source');
    sourceElement.setAttribute('src', 'https://cbtvnow.com:5866/hls/livest2024.m3u8');
    sourceElement.setAttribute('type', 'application/x-mpegURL');
    videoElement.appendChild(sourceElement);

    videoContainer.appendChild(videoElement);

    // Insertar el contenedor del video en el body
    document.body.appendChild(videoContainer);

    // Crear el contenedor de opciones
    const optionsContainer = document.createElement('div');
    optionsContainer.className = 'video-options';

    // Crear los botones de opciones
    const option1Button = document.createElement('button');
    option1Button.textContent = 'OPCION 1';
    option1Button.onclick = () => changeVideo('https://cbtvnow.com:5866/hls/livest2024.m3u8');

    const option2Button = document.createElement('button');
    option2Button.textContent = 'OPCION 2';
    option2Button.onclick = () => changeVideo('https://cbtvnow.com:5866/hls/livest2024.m3u8');

    optionsContainer.appendChild(option1Button);
    optionsContainer.appendChild(option2Button);

    // Insertar el contenedor de opciones en el body
    document.body.appendChild(optionsContainer);

    // Inicializar Video.js
    const player = videojs('videoPlayer', {
        autoplay: true,
        controls: true,
        fluid: true,
        responsive: true
    });

    // Función para cambiar el video
    function changeVideo(source) {
        player.src({
            src: source,
            type: 'application/x-mpegURL'
        });
        player.play();
    }

    // Modo pantalla completa horizontal
    player.on('fullscreenchange', () => {
        if (player.isFullscreen()) {
            const screenOrientation = screen.orientation || {};
            if (screenOrientation.lock) {
                screenOrientation.lock('landscape').catch(() => {
                    console.warn('No se pudo bloquear la orientación en horizontal.');
                });
            }
        }
    });

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

        .video-options {
            margin-top: 25px;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 20px;
            flex-wrap: wrap;
        }

        .video-options button {
            background: linear-gradient(145deg, #ff3c3c, #d62d2d);
            color: #fff;
            padding: 15px 25px;
            font-size: 20px;
            font-weight: bold;
            border: none;
            border-radius: 30px;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2), -3px -3px 10px rgba(255, 255, 255, 0.5);
        }

        .video-options button:hover {
            background: linear-gradient(145deg, #d62d2d, #ff3c3c);
            box-shadow: 0px 8px 20px rgba(230, 57, 70, 0.6);
            transform: translateY(-3px) scale(1.05);
        }

        @media (max-width: 768px) {
            .video-container {
                padding: 15px;
            }

            .video-options {
                flex-direction: column;
                gap: 15px;
            }

            .video-options button {
                width: 90%;
                padding: 12px 20px;
            }
        }

        @media (max-width: 480px) {
            .video-container {
                padding: 10px;
            }

            .video-options button {
                font-size: 14px;
            }
        }
    `;
    document.head.appendChild(style);

})();
