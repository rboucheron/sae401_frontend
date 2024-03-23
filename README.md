# Sae 401 : Sushi House 🍣

## Sommaire

1. [Présentation du projet](#présentation-du-projet)
2. [Analyse des besoins de l'application](#analyse-des-besoins-de-lapplication)
3. [diagramme de class](#diagramme-de-class)
4. [diagramme d'activité](#diagramme-d'activité)
5. [Collaboration](#collaboration)
6. [USER EVIL STORIES](#user-evil-stories)

## Présentation du projet

Nom de l'application : Sushi House

Équipe de développement :  [Victoria Moukielo (chef de projet 👑)](https://github.com/Torycia) , [Raphaël Boucheron](https://github.com/rboucheron), [Jaraf Gueye](https://github.com/JarafG), [Yaëlle Jehu](https://github.com/Yalou09)


Logo : 

  ![Logo Sushi House](./src/assets/images/logoo.png)


Technologie utilisée pour le développement front_end : [Angular CLI](https://github.com/angular/angular-cli) version 17.1.2.
[tailwindcss](https://tailwindcss.com/)


## Analyse des besoins de l'application 
![ diagramme de Use Case ](./src/assets/images/User%20case.png)

## diagramme de class

![ diagramme de class ](./src/assets/images/Diagramme%20de%20classes%20Lucidchart.png)

## diagramme d'activité

![ diagramme de class ](./src/assets/images/diagramme%20d'activité.png)

## Collaboration 

[liens vers le trello](https://trello.com/invite/b/bB11rJYZ/ATTIa3332ba1b0ecb6a44310823187a12c4757D9D428/sae-401)


## USER EVIL STORIES

Story 1 :
- Un client malveillant et qui s'y connait en informatique essaie d'accéder a notre code et modifier nos fonctions qui gèrent le prix total dans le panier. Il a acheté 5 boxs et veut modifier le total pour qu'il ait moins a payer.
- Il accède au local storage et modifie les prix des boxes

Notre solution : 
- Ne stocker seulement les ID et la quantité des boxes dans le local storage.


Story 2 : 
- Un client malveillant et qui s'y connait en informatique essaie d'accéder a notre API et donc a notre base de données.
- un client malveillant à accés à toutes les méthode du  crud il peut donc ajouter supprimer et modifier des données.  

Notre solution : 
- Nous avons supprimé les méthode CUD (POST, PUT, DELETE) et Pour empécher sela nous pouvons crée une authentification d'aministrateur


## Maquette


![ acceuil ](./src/assets/images/Capture%20d’écran%202024-03-23%20à%2016.42.18.jpeg)
![ boxs ](./src/assets/images/Capture%20d’écran%202024-03-23%20à%2016.43.45.jpeg)
![ boxs ](./src/assets/images/Capture%20d’écran%202024-03-23%20à%2016.44.05.jpeg)
![ boxs ](./src/assets/images/Capture%20d’écran%202024-03-23%20à%2016.44.41.jpeg)
![ boxs ](./src/assets/images/Capture%20d’écran%202024-03-23%20à%2016.45.22.jpeg)


[liens vers la figma](https://www.figma.com/file/qpG2KFLAUv3hHR27enkNqU/SAE401-official?type=design&node-id=0%3A1&mode=design&t=aLZhk8esmMo1Hsnd-1)
