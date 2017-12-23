// Fonction d'appel
function master() {
	recup_nom_recette();
	menu_recettes();
}

// Variable globale
var nom_recette = "";

// Pour récupérer le nom de la recette cliquée
function recup_nom_recette(str){
	nom_recette = str.target.innerHTML;
	alert(nom_recette);
}

var affichage = document.getElementById('main-content');

function visible(recette)
    {
        affichage.style.display = 'none';
        affichage = document.getElementById(recette);
        affichage.style.display = '';
    }

function menu_recettes(){
// On génère dynamiquement le menu avec la liste des recettes
	for (line in recettes) {

		var rec = recettes[line];
		var clef = Object.keys(rec);
		var recette = "";

		var liste_recettes = document.getElementById("receipt-menu");
		var une_recette = document.createElement("li");
		liste_recettes.appendChild(une_recette);
		var menu_liste_recettes = document.createTextNode(rec ["nom"]);

		var lien_recette = document.createElement("a");
		une_recette.appendChild(lien_recette);
		lien_recette.appendChild(menu_liste_recettes);
		lien_recette.addEventListener("click", recup_nom_recette);
	}

}


function recette_description(){

	for (line in recettes) {
		console.log(line);
		var rec = recettes[line];
		var clef = Object.keys(rec);

		var classe_recette = document.getElementById("receipt-bio");
		var bio_recette = document.createElement("p");
		classe_recette.appendChild(bio_recette);
		var texte_bio_recette = document.createTextNode(rec ["description"]);
		bio_recette.appendChild(texte_bio_recette);
	}
}

function recette_titre(){
	// titre + image
}

function recette_infos(){
	// infos cooking
}

function recette_ingredients(){
	// liste ingrédients
}

function recette_preparation(){
	// liste preparation
	alert("oboo");
}