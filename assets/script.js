console.log('connecté !');
/*
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
});*/


let index = 1; 
//Je sélectionne et je stocke
//arrow_left + arrow_right
const arrow1 = document.querySelector('.arrow_left');
const arrow2 = document.querySelector('.arrow_right');

//Je soumets les fleches à une action au click
arrow1.addEventListener('click', function (settings){
	dotSelect(settings)
})

arrow2.addEventListener('click', function (settings){
	dotSelect(settings)
})

function dotSelect(settings) {
	
	var bulletEmpty = document.getElementsByClassName('dot');
	
	//Si l'ID de l'élément sur lequel l'événement a été déclenché est égal à "arrow1", alors index est décrémenté de 1. Sinon, index est incrémenté de 1.
	index += settings.target.classList.contains('arrow_left') ? -1 : 1;

	//Si index est inférieur à 1 (hors de la plage valide), l'expression retourne slides.length. Sinon, si index est supérieur à la longueur de slides, l'expression retourne 1.
	index = index < 1 || index > slides.length ? (index < 1 ? slides.length : 1) : index;

	//cette boucle forEach parcourt tous les éléments de bulletEmpty et supprime la classe "dot_selected" de chacun d'eux.
	Array.from(bulletEmpty).forEach(dot => {
		dot.classList.remove("dot_selected")
	});

	//ce code ajoute la classe CSS "dot_selected" à un élément spécifique dans la variable bulletEmpty, en se basant sur la valeur de index
	bulletEmpty[index - 1].classList.add("dot_selected")



	const taglineElement = document.querySelector('#banner p');
	
	document.querySelector('.banner-img').src = './assets/images/slideshow/' + slides[index - 1].image;
	taglineElement.innerHTML = slides[index - 1].tagLine;

}


// une variable nommée "slides" qui est un tableau (array) contenant plusieurs objets. Chaque objet représente une diapositive et contient deux propriétés : "image" et "tagLine".
const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
