/* script.js — Code optimisé, tous les goulets d'étranglement artificiels (2s + 1s de blocage) ont été supprimés. */
(function(){
  
  // Le code qui bloquait le thread principal pendant 2 secondes a été supprimé.
  
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