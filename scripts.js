const botonMenu = document.getElementById('botonMenu');
const menuNavegacion = document.getElementById('menuNavegacion');
botonMenu.addEventListener('click', () => {
    menuNavegacion.style.display = menuNavegacion.style.display === 'block' ? 'none' : 'block';
});



const botonConversaciones = document.getElementById('botonConversaciones');
const listaConversaciones = document.getElementById('conversaciones');
botonConversaciones?.addEventListener('click', () => {
    listaConversaciones.style.display = listaConversaciones.style.display === 'block' ? 'none' : 'block';
});



const botonAdjuntar = document.getElementById('botonAdjuntar');
const menuDesplegable = document.getElementById('menuDesplegable');
botonAdjuntar.addEventListener('click', () => {
    menuDesplegable.style.display = menuDesplegable.style.display === 'block' ? 'none' : 'block';
});



const conversaciones = document.querySelectorAll('.conversacion');
conversaciones.forEach(conversacion => {
    conversacion.addEventListener('click', () => {
        conversacion.querySelector('span:first-child').style.fontWeight = 'normal';
    });
});
