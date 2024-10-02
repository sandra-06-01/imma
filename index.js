let cartCount = 0;
const cartCounter = document.querySelector('.count');

document.querySelectorAll('.col-1 img').forEach((image) => {
    image.addEventListener('click', () => {
        cartCount++;
        cartCounter.textContent = cartCount;
    });
});

// Récupérer les éléments nécessaires
const loginModal = document.getElementById('login');
const loginBtn = document.getElementById('loginBtn');
const closeModalBtn = document.querySelector('.close');

// Ouvrir la modale quand on clique sur "Login"
loginBtn.addEventListener('click', function(event) {
    event.preventDefault(); // Empêche le comportement par défaut du lien
    loginModal.classList.remove('hidden');
});

// Fermer la modale quand on clique sur le bouton de fermeture (x)
closeModalBtn.addEventListener('click', function() {
    loginModal.classList.add('hidden');
});

// Fermer la modale si on clique en dehors du contenu de la modale
window.addEventListener('click', function(event) {
    if (event.target == loginModal) {
        loginModal.classList.add('hidden');
    }
});
