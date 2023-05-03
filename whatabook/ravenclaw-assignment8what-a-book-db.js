/*
==============================================================================
; Title: ravenclaw-assignment8what-a-book-db.js
; Author: House RavenClaw
; Modified by: Chris Gorham, Caitlynne Johnson, Shane hingtgen
; Bellevue University
; Date: 05/03/2023
; Description: Group project for What a Book week 2
; Work Cited: 
    Coding Guidelines
    Web-420 Assign_8
    Web-420 GitHub Examples
=================================================================================================================
*/

// delete the books and customers collections
db.books.drop();
db.customers.drop();

// create the books collection
db.createCollection("books", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      properties: {
        title: {
          bsonType: "string",
        },
        genre: {
          bsonType: "string",
        },
        author: {
          bsonType: "string",
        },
        bookId: {
          bsonType: "string",
        },
      },
    },
  },
});

// create the customer collection
db.createCollection("customers", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      properties: {
        firstName: {
          bsonType: "string",
        },
        lastName: {
          bsonType: "string",
        },
        customerId: {
          bsonType: "string",
        },
        wishList: {
          bsonType: "array",
        },
      },
    },
  },
});

// Books.
whereTheRedFernGrows = {
  title: "Where the Red Fern Grows",
  genre: "autobiographical fiction",
  author: "Wilson Rawls",
  bookId: "0-440-22814-X",
};

postOffice = {
  title: "Post Office",
  genre: "Drama",
  author: "Charles Bukowski",
  bookId: "1039104810481",
};

factotum = {
  title: "Factotum",
  genre: "Drama",
  author: "Charles Bukowski",
  bookId: "10490124910",
};

theCruelPrince = {
  title: "The Cruel Prince",
  genre: "Fantasy",
  author: "Holly Black",
  bookId: "9780316310277",
};

// inserting our documents to the books collection
db.books.insertOne(whereTheRedFernGrows);
db.books.insertOne(postOffice);
db.books.insertOne(factotum);
db.books.insertOne(theCruelPrince);

// customers
shane = {
  firstName: "Shane",
  lastName: "Hingtgen",
  customerId: "12345",
  wishList: [
    {
      title: "Where the Red Fern Grows",
      genre: "autobiographical fiction",
      author: "Wilson Rawls",
      bookId: "0-440-22814-X",
    },
    {
      title: "Factotum",
      genre: "Drama",
      author: "Charles Bukowski",
      bookId: "10490124910",
    },
  ],
};

chris = {
  firstName: "Chris",
  lastName: "Gorham",
  customerId: "1091904014",
  wishList: [
    {
      title: "Where the Red Fern Grows",
      genre: "autobiographical fiction",
      author: "Wilson Rawls",
      bookId: "0-440-22814-X",
    },
    {
      title: "The Cruel Prince",
      genre: "Fantasy",
      author: "Holly Black",
      bookId: "9780316310277",
    },
  ],
};

cait = {
  firstName: "Cait",
  lastName: "Johnson",
  customerId: "16136",
  wishList: [
    {
      title: "The Cruel Prince",
      genre: "Fantasy",
      author: "Holly Black",
      bookId: "9780316310277",
    },
    {
      title: "Post Office",
      genre: "Drama",
      author: "Charles Bukowski",
      bookId: "1039104810481",
    },
  ],
};

// inserting our documents to the customers collection
db.customers.insertOne(shane);
db.customers.insertOne(chris);
db.customers.insertOne(cait);
