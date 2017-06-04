# Superhero App

This app is a simple express server app with get/post/patch/delete routes for a hero resource. It is not robust (no error handling, etc.), but it does show the basics of an express server with a knex/postgres database.

# To Get Started

- `npm install`
- `createdb superhero_db`
- `knex migrate:latest`
- `knex seed:run`
