<style>
    /* Contenedor del video */
    .video-container {
        max-width: auto; /* Ancho máximo */
        margin: auto; /* Centrado y margen superior/inferior */
        padding: 0px; /* Espaciado interno */
        border-radius: 20px; /* Bordes redondeados */
        background: linear-gradient(145deg, #ffffff, #f0f0f0); /* Fondo degradado */
        box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2), -5px -5px 15px rgba(255, 255, 255, 0.5); /* Efecto de neomorfismo */
    }

    /* Estilos para el reproductor de video */
    .video-js {
        background-color: #000; /* Fondo oscuro para contraste */
        border-radius: 15px; /* Bordes redondeados */
        overflow: hidden; /* Oculta el contenido desbordado */
        box-shadow: 0px 4px 10px rgba(10, 1, 10, 1.25); /* Sombra ligera */
    }

    /* Contenedor de opciones */
    .video-options {
        margin-top: 25px; /* Espaciado superior */
        display: flex;
        justify-content: center; /* Centra los botones */
        align-items: center; /* Alineación vertical */
        gap: 20px; /* Espaciado entre botones */
        flex-wrap: wrap; /* Ajusta los botones en líneas múltiples si es necesario */
    }

    /* Botones de opciones */
    .video-options button {
        background: linear-gradient(145deg, #ff3c3c, #d62d2d); /* Fondo degradado rojo */
        color: #fff; /* Texto blanco */
        padding: 15px 25px; /* Tamaño del botón */
        font-size: 20px; /* Tamaño de fuente */
        font-weight: bold; /* Negrita */
        border: none; /* Sin borde */
        border-radius: 30px; /* Bordes altamente redondeados */
        cursor: pointer; /* Cursor interactivo */
        transition: all 0.3s ease; /* Transición suave */
        box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2), -3px -3px 10px rgba(255, 255, 255, 0.5); /* Efecto de profundidad */
    }

    /* Efecto al pasar el ratón por encima */
    .video-options button:hover {
        background: linear-gradient(145deg, #d62d2d, #ff3c3c); /* Cambia el degradado */
        box-shadow: 0px 8px 20px rgba(230, 57, 70, 0.6); /* Sombra más intensa */
        transform: translateY(-3px) scale(1.05); /* Eleva y aumenta ligeramente el tamaño */
    }

    /* Estilos responsivos */
    @media (max-width: 768px) {
        .video-container {
            padding: 15px; /* Reduce el padding en pantallas más pequeñas */
        }

        .video-options {
            flex-direction: column; /* Apila los botones en vertical */
            gap: 15px; /* Espaciado ajustado */
        }

        .video-options button {
            width: 90%; /* Ocupa casi todo el ancho disponible */
            padding: 12px 20px; /* Reduce ligeramente el padding */
        }
    }

    @media (max-width: 480px) {
        .video-container {
            padding: 10px; /* Reduce aún más el padding */
        }

        .video-options button {
            font-size: 14px; /* Ajusta el tamaño de fuente */
        }
    }
</style>


<script src="https://vjs.zencdn.net/7.17.0/video.min.js"></script>
<script>
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
</script>
