
  
  // Confirmation lors de la soumission du formulaire
  function confirmerEnvoi() {
    return confirm("Êtes-vous sûr(e) de vouloir soumettre ce formulaire ?");
  }
  
  // Ajouter une ligne dynamique au tableau des plats
  function ajouterPlat() {
    const tableau = document.getElementById("tableau-gastronomie");
    const ligne = tableau.insertRow();
    ligne.innerHTML = `
      <td>Paella</td>
      <td>Espagne</td>
      <td>Riz, Fruits de mer, Safran</td>
    `;
  }
  // Sélection des marqueurs et de la modale
const markers = document.querySelectorAll('.marker');
const modal = document.getElementById('info-modal');
const closeModal = document.querySelector('.close');
const title = document.getElementById('place-title');
const info = document.getElementById('place-info');
const audio = document.getElementById('place-audio');

// Fonction pour afficher la modale
markers.forEach(marker => {
  marker.addEventListener('click', () => {
    title.textContent = marker.dataset.place;
    info.textContent = marker.dataset.info;
    audio.src = marker.dataset.audio;
    modal.classList.remove('hidden');
  });
});

// Fonction pour fermer la modale
closeModal.addEventListener('click', () => {
  modal.classList.add('hidden');
  audio.pause();
  audio.currentTime = 0;
});
