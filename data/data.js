//Données

var recettes = {

	Salade: {
		'nom' : 'Salade',
		'id' : '1',
		'classe' : 'starter',
		'note' : '★★★★',
		'temps' : '10 minutes',
		'couts' : '8 €',
		'difficulte' : '★★',
		'description' : 'Une manière simple et rapide de préparer une bonne salade légère pour accompagner tous vos plats',
		'ingrédients' : ['1 belle salade au choix selon la saison: laitue pommée, batavia, romaine, frisée',
		'Sauce vinaigrette classique', '2 petits oignons blancs ou 1 gousse d\'ail', 'Fines herbes, estragon'],
		'preparation' : ['- Préparer la salade : couper la base de la salade et l\'effeuiller. Retirer la base des côtes si on les trouve trop épaisses',
		'- Laver les feuilles de salade 3 fois de suite dans un bac avec une bonne quantité d\'eau. Ne pas viser l\'eau mais sortir les feuilles de l\'eau avec ses mains. Mettre un filet de vinaigre dans la dernière eau de rinçage',
		'- Essorer à l\'essoreuse ou la mettre dans un torchon et secouer',
		'- Préparer la vinaigrette avec 1 cuillerée de vinaigre pour 3 cuillerées d\'huile. Selon l\'humeur ajouter ail ciselé, oignon blanc coupé en fines lamelles, fines herbes ou estragon...',
		'- Couper les feuilles de salade si elles sont grandes avant de les mettre dans le saladier car c\'est bien connu "on ne coupe pas la salade au couteau à table" même si maintenant les couteaux sont en inox... Assaisonner au dernier moment pour ne pas "cuire" la salade'],
		'image' : 'img/salade_270x145.png'	
	},


	Burger: {
		'nom' : 'Burger',
		'id' : '2',
		'classe' : 'dish',
		'note' : '★★★★★',
		'temps' : '30 minutes',
		'couts' : '12 €',
		'difficulte' : '★★★★',
		'description' : 'Un hamburger ou par aphérèse burger, est un sandwich d\'origine allemande. Et la qualité Allemande, c\'est aussi sur les papilles',
		'ingrédients' : ['1 steack de 500g', 'Une tomate', 'Une cuillère de moutarde', '2 tranches d\'emmental', '3 feuilles de salade vertes',
		 '1 tranche de cheddar', 'Pain à Hamburger', '1 jaune d\'oeuf'],
		'preparation' : ['- Mélanger la mayonnaise, la moutarde, les cornichons et les câpres dans un bol. Garder au frais jusqu\'à utilisation',
		'- Mélanger la chapelure et l’oeuf à la viande hachée',
		'- Ajouter l\'oignon et mêler le tout. Assaisonner selon les goûts',
		'- Former 4 grands burgers (ils doivent être au moins aussi larges que le pain)',
		'- Dans une grande poêle, faire chauffer de l\'huile',
		'- Laisser cuire les burgers 5 min de chaque côté à feu moyen',
		'- Ouvrir les pains, les chauffer quelques secondes au four à micro-ondes',
		'- Sur le fond, poser une tranche de fromage, le burger, la laitue puis la sauce, et enfin le couvercle'],
		'image' : 'img/burger_270x145.png'		
	},

	Pizza: {
		'nom' : 'Pizza',
		'id' : '3',
		'classe' : 'dish',
		'note' : '★★★★',
		'temps' : '45 minutes',
		'couts' : '15 €',
		'difficulte' : '★★',
		'description' : 'Quand l\'authentique plat italien rencontre les saveurs espagnoles, cela donne un délicieux résultat plein de saveurs',
		'ingrédients' : ['300 g de pâte à pizza', '4 grosses tomates hachées (bien mûres)', '180 g de mozzarella en fines tranches', '4 fonds d’artichaut à l\'huile (en boîte)',
		'2 cuillères à soupe d\'huile d\'olive','1/2 chorizo'],
		'preparation' : ['- Préchauffer le four à 240ºC. Former un disque avec la pâte et le poser sur la plaque du four farinée',
		'- Bien égoutter les fonds d\'artichaut et les couper en deux. Couper les olives en rondelles',
		'- Badigeonner la surface de la pâte d\'1 cuillère à soupe d\'huile d\'olive. Etaler les tomates hachées et les olives dessus',
		'- Recouvrir de tranches de mozzarella, saler et poivrer',
		'- Répartir les artichauts et les tranches de chorizo',
		'- Saupoudrer avec l\'origan et arroser avec l\'huile d\'olive restante',
		'- Enfourner et cuire pendant 20 minutes'],
		'image' : 'img/pizza_270x145.png'	
	},

	Tiramisu: {
		'nom' : 'Tiramisu',
		'id' : '4',
		'classe' : 'dessert',
		'note' : '★★★★★',
		'temps' : '1 heure',
		'couts' : '22 €',
		'difficulte' : '★★★★',
		'description' : 'Inutile de savoir parler avec les mains pour apprécier ce délicieux dessert italien, qui comblera tout les gourmands',
		'ingrédients' : ['24 biscuits à la cuillère (style boudoir)', '250g de mascarpone en crème', 'Une cuillère de moutarde',
		'75g de sucre', '3 œufs', '1 cuillère à soupe de rhum (facultatif)', '3 tasses de café (déca de préférence)'],
		'preparation' : ['- Séparer les blancs des jaunes d\'oeufs',
		'- Mélanger les jaunes avec le sucre roux et le sucre vanillé',
		'- Ajouter le mascarpone au fouet',
		'- Ajouter le mascarpone au fouet',
		'- Mouiller les biscuits dans le café rapidement avant d\'en tapisser le fond du plat',
		'- Recouvrir d\'une couche de crème au mascarpone puis répéter l\'opération en alternant couche de biscuits et couche de crème en terminant par cette dernière',
		'- Saupoudrer de cacao',
		'- Mettre au réfrigérateur 4 heures minimum puis déguster frais'],
		'image' : 'img/tiramisu_270x145.png'
	}
}