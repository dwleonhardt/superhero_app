# Superhero App

This app is a simple express server app with get/post/patch/delete routes for a hero resource. It is not robust (no error handling, etc.) and does not have a front end associated with it yet, but it does show the basics of an express server with a knex/postgres database.

# To Get Started

- Fork and clone (or just clone) this repository

(from terminal)
- `npm install`
- `createdb superhero_db`
- `knex migrate:latest`
- `knex seed:run`

# Associated Videos

- [Express Setup](https://youtu.be/iHorRriIID4)
- [Knex Setup](https://youtu.be/NRaKl0wqDZQ)
- [Migrations](https://youtu.be/ASIxnJ4nRyg)
- [Seeds](https://youtu.be/-XC_5XhpPPQ)
