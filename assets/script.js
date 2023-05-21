console.log('connecté !');

//Je sélectionne et je stocke
//arrow_left + arrow_right
const arrow1 = document.querySelector('.arrow_left');
console.log(arrow1);
const arrow2 = document.querySelector('.arrow_right');
console.log(arrow2);
const bulletEmpty = document.querySelector('.dot');
console.log(bulletEmpty);

//Je soumets les fleches à une action 
arrow1.addEventListener('click', function () {
	console.log('arrow_left cliqué');
	// On change le bullet point actif au précédent
	const dots = document.querySelectorAll('.dot');
	const currentDot = document.querySelector('.dot_selected');
	const previousDot = currentDot.previousElementSibling || dots[dots.length - 1];
	currentDot.classList.remove('dot_selected');
	previousDot.classList.add('dot_selected');

	// On change l'image et le texte
	const imageElement = document.querySelector('.banner-img');
	const taglineElement = document.querySelector('#banner p');

	// On récupère l'index de la diapositive actuelle
	const currentIndex = slides.findIndex((slide) => imageElement.getAttribute('src') === slide.image);

	// On calcule l'index de la diapositive précédente en faisant une boucle circulaire
	const previousIndex = (currentIndex - 1 + slides.length) % slides.length;

	// On met à jour l'image et le texte avec les informations de la diapositive précédente
	imageElement.setAttribute('src', slides[previousIndex].image);
	taglineElement.innerHTML = slides[previousIndex].tagLine;

});

arrow2.addEventListener('click', function () {
	console.log('arrow_right cliqué');

	// On change le bullet point actif au suivant
	const dots = document.querySelectorAll('.dot');
	const currentDot = document.querySelector('.dot_selected');
	const nextDot = currentDot.nextElementSibling || dots[0];
	currentDot.classList.remove('dot_selected');
	nextDot.classList.add('dot_selected');

	// On change l'image et le texte
	const imageElement = document.querySelector('.banner-img');
	const taglineElement = document.querySelector('#banner p');

	// On récupère l'index de la diapositive actuelle
	const currentIndex = slides.findIndex((slide) => imageElement.getAttribute('src') === slide.image);

	// On calcule l'index de la prochaine diapositive en faisant une boucle circulaire
	const nextIndex = (currentIndex + 1) % slides.length;

	// On met à jour l'image et le texte avec les informations de la prochaine diapositive
	imageElement.setAttribute('src', slides[nextIndex].image);
	taglineElement.innerHTML = slides[nextIndex].tagLine;
});

// une variable nommée "slides" qui est un tableau (array) contenant plusieurs objets. Chaque objet représente une diapositive et contient deux propriétés : "image" et "tagLine".
const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
