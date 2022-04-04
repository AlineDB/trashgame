# trashgame
Jeu développé dans le cadre du cours de Javascript pour l'examen de juin 2022. 
(En cours de développement)

Règles

Les déchets tombent. A toi de les attraper pour les glisser dans la bonne poubelle à l'aide de la souris ou l'écran tactile. 

Tu commences la partie avec 3 vies et un chrono de 60 secondes. Si tu manques un déchet, tu perds une vie. Si le déchet ne correspond pas à la poubelle, tu perds une vie. 

Les plastiques et métaux vont dans la poubelle bleu. Les déchets dégradables ou de nourriture vont dans la poubelle verte. Les papiers et cartons vont dans la poubelles jaune. Le reste va dans la poubelle noire.

Bon jeu !



Game developed as part of the Javascript course for the June 2022 exam. 
(Under development)

Rules

The waste falls down. It's up to you to put them in the right bin using the <- and -> keys. 

You start the game with 3 lives and a 60 second timer. If you miss a waste, you lose a life. If the waste does not match the bin, you lose a life. 

Plastics and metals go in the blue bin. Degradable waste or food waste goes in the green bin. Papers and cardboards go in the yellow bin. The rest goes in the black bin.

Enjoy the game!


# Logique: 
canvas de base avec background image.
Dessine les images des 4 poubelles.
Zone affiche temps (60), zone vie 3 coeurs et points démarre à zéro.
Un message apparait pour expliquer les règles avec Bouton commencer.
Une fois appuyer, le message disparaît.
Les déchets tombent du haut vers le bas aléatoirement (choix entre différentes images de déchets dans un tableau).
La vitesse est aléatoire et évolue (début min 1 / max 2 et les nombres grandissent toutes les 10sec).
La coordonnées x des déchets est aléatoire également.
Si déchet tombent par terre  - 1 vie (Détection sortie du bas écran).
Si déchet pas dans la bonne poubelle -1 vie.
Détection collision entre déchet et poubelle -> même couleur ou nom ou autre pour vérifier si bonne poubelle donc + 1pts.
