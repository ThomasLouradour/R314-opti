/* script.js — Code optimisé. Le blocage de 3 secondes a été supprimé. */
(function(){
  
  window.addEventListener('load', function(){
    // La boucle bloquante de 1 seconde a été supprimée.

    // Conservation de la logique d'ajout de classe 'loaded' pour les images
    const imgs = document.querySelectorAll('.card img');
    imgs.forEach(img => { 
      if (img.complete) {
        img.classList.add('loaded');
      } else {
        img.addEventListener('load', ()=> img.classList.add('loaded')); 
      }
    });
  });
})();