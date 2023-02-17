# LAB - Class 04

## Project: Api-Server

### Author: Jonathan Staib

### Problem Domain  

Build a REST API using Express, by creating a proper series of endpoints that perform CRUD operations on a Postgres SQL Database, using the REST standard

### Links and Resources

- [GitHub Actions ci/cd](https://github.com/JonathanStaib/api-server/actions)
- Dev [back-end server url](https://api-server-ypqe.onrender.com)

### Setup

#### `.env` requirements (where applicable)

PORT
DATABASE_URL

#### How to initialize/run your application (where applicable)

- e.g. `npm start`

#### How to use your library (where applicable)

#### Features / Routes

- `/city`
- `/customer`
- both have CRUD functionality and can be utilized by ID

#### Tests

fill this in as you see fit
- How do you run tests?
  npm test with jest and supertest
- Any tests of note?
  - 404 invalid route
  - 404 invalid method
  - if you can get customer or city
  - if you can get one customer or city by id
  - if you can create a customer or city
  - if you can delete a customer or city
  - if you can update a customer or city
- Describe any tests that you did not complete, skipped, etc
  all completed

#### UML

![Lab-01 UML](assets/lab-01-uml.png)
