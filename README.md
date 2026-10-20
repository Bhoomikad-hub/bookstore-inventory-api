# Bookstore Inventory Management System

## About the Project

This project is a REST API for managing a bookstore's inventory. It uses Node.js, Express.js, and MongoDB.

## Technologies Used

* Node.js
* Express.js
* MongoDB
* Mongoose
* Postman

## Features

* Add a new book
* View all books
* Search for a book by ID
* Update book details
* Delete a book

## Installation

1. Clone the repository.

2. Open the project folder in a terminal.

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Make sure MongoDB is installed and running locally.

5. Start the server:

   ```bash
   node server.js
   ```

## API Endpoints

| Method | Endpoint     | Description             |
| ------ | ------------ | ----------------------- |
| GET    | `/`          | Welcome message         |
| GET    | `/books`     | View all books          |
| GET    | `/books/:id` | Search for a book by ID |
| POST   | `/books`     | Add a new book          |
| PUT    | `/books/:id` | Update a book           |
| DELETE | `/books/:id` | Delete a book           |

## Local Server

`http://localhost:3000`

## Database

Database name: `bookstoreDB`

Collection name: `books`
