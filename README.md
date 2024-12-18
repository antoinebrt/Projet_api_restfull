# Projet_api_restfull

```txt

# Application de réservation d’événements

## Description

np

## Fonctionnalités principales

- Gestion des utilisateurs avec authentification JWT.
- CRUD des événements (création, lecture, mise à jour et suppression) réservé aux administrateurs.
- Réservation d’événements pour les utilisateurs enregistrés.
- Règle de gestion : empêche les réservations si un événement est complet.

## Objectif du projet

Mettre en œuvre une API respectant les normes RESTful avec une architecture logicielle propre. 
Ce projet utilise Sequelize pour gérer la base de données et JWT pour l'authentification.

## Technologies utilisées

- Node.js
- Express.js
- Sequelize (pour la bdd)
- JWT (authentification)


## Membres

antoinebrt: Antoine Breteau

P3ast: Mathis Braux

EitanGrn: Eitan Grinshtein

##Toutes les commandes pour gérer la Base de données : Sinon utliser https://sqliteviewer.app/ avec le fichier sqlite
(A ne pas oublier npm install, le token secret à mettre pour certaines commandes et le PORT à remplacer)
(Les commandes fonctionnent dans gitbash !)
1. Authentification

- Créer un utilisateur (register)
curl -X POST -H "Content-Type: application/json" -d '{"email": "monemail@gmail.com", "password": "monMotDePasse123"}' http://localhost:PORT/api/auth/register
- Se connecter (login)
curl -X POST -H "Content-Type: application/json" -d '{"email": "monemail@gmail.com", "password": "monMotDePasse123"}' http://localhost:PORT/api/auth/login

2. Gestion des événements

- Récupérer tous les événements
curl -X GET -H "Authorization: Bearer <TON_TOKEN>" http://localhost:PORT/api/events

- Créer un événement (admin uniquement)
curl -X POST -H "Content-Type: application/json" -H "Authorization: Bearer <TON_TOKEN>" -d '{"name": "Nom de l'événement", "date": "2024-12-31", "categoryId": 1}' http://localhost:PORT/api/events

- Mettre à jour un événement (admin uniquement)
curl -X PUT -H "Content-Type: application/json" -H "Authorization: Bearer <TON_TOKEN>" -d '{"name": "Nom modifié", "date": "2024-12-31", "categoryId": 2}' http://localhost:PORT/api/events/1

- Supprimer un événement (admin uniquement)
curl -X DELETE -H "Authorization: Bearer <TON_TOKEN>" http://localhost:PORT/api/events/1

3. Gestion des réservations

- Créer une réservation
curl -X POST -H "Content-Type: application/json" -H "Authorization: Bearer <TON_TOKEN>" -d '{"eventId": 1, "userId": 2, "status": "confirmed"}' http://localhost:PORT/api/reservations

- Annuler une réservation
curl -X PUT -H "Content-Type: application/json" -H "Authorization: Bearer <TON_TOKEN>" -d '{"status": "cancelled"}' http://localhost:PORT/api/reservations/1/cancel

4. Gestion des catégories

- Créer une catégorie (admin uniquement)
curl -X POST -H "Content-Type: application/json" -H "Authorization: Bearer <TON_TOKEN>" -d '{"name": "Nouvelle catégorie"}' http://localhost:PORT/api/categories

- Récupérer toutes les catégories
curl -X GET -H "Authorization: Bearer <TON_TOKEN>" http://localhost:PORT/api/categories

- Mettre à jour une catégorie (admin uniquement)
curl -X PUT -H "Content-Type: application/json" -H "Authorization: Bearer <TON_TOKEN>" -d '{"name": "Catégorie mise à jour"}' http://localhost:PORT/api/categories/1

- Supprimer une catégorie (admin uniquement)
curl -X DELETE -H "Authorization: Bearer <TON_TOKEN>" http://localhost:PORT/api/categories/1

