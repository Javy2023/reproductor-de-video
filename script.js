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
