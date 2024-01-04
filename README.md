# JS Vanilla Kanban

## About 

This project is the result of almost 4 months of my Javascript courses. The goal was to make a fullstack application that would cover all the development process. From building the database structure to make a RESTful API, to the creation of client interractions in a single page application.

### [Check out the demo](https://js-vanilla-kanban.vercel.app/) :rocket:
(Leave a note in a new card so everyone can read it!)


## Technologies

### Server

- Server run with NodeJS and [Express](https://expressjs.com/)
- Database build with SQL and [PostgreSQL](https://www.postgresql.org/)
- API build with [Sequelize](https://sequelize.org/)

### Client

- Use [Bulma.io](https://bulma.io/) as CSS framework
- Drag and Drop feature with [SortableJS](https://sortablejs.github.io/Sortable/) Javascript Library

## Install

If you want to run it locally, you need to clone this repository and `npm i` 


### 1. Create your local database
Create a local database with PostgreSQL

```sql
CREATE USER kanban WITH LOGIN PASSWORD yourpassword;
```

```sql
CREATE DATABASE kanban WITH OWNER kanban;
```

`\c kanban kanban` to connect to the dabase

### 2. Connect the project to your database

Go to the `.env` files and configure the DB_URL with your database information.
Check the `.env.example` as template : 

```
POSTGRES_URL=postgres://USER:PASSWORD@localhost:5432/DBNAME
```

### 3. Build and populate the database

Run `npm run db:create` then `npm run db:populate`

### 4. Run locall

`npm run start` and enjoy!


![Kanban Demo](./public/assets/images/Kanban_demo.gif)