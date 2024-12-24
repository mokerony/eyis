function abrirSobre() {
    var sobre = document.getElementById('sobre');
    var mensaje = document.getElementById('mensaje');
    var audio = document.getElementById('audio');

    // Reproducir la música
    audio.play();

    // Mostrar el mensaje
    mensaje.style.display = 'block';

    // Añadir animación de apertura del sobre
    sobre.style.animation = 'abrirSobre 0.8s forwards';

    // Opcional: Después de la animación, ocultamos el sobre
    setTimeout(function() {
        sobre.style.display = 'none';
    }, 800); // 800ms es el tiempo de la animación
}
