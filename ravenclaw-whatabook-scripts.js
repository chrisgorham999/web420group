/*
==============================================================================
; Title: ravenclaw-whatabook-scripts.js
; Author: House RavenClaw
; Modified by: Chris Gorham, Caitlynne Johnson, Shane Hingtgen
; Bellevue University
; Date: 05/03/2023
; Description: Group project for WhatABook
; Work Cited: 
    Coding Guidelines
    Web-420 Assign_8
    Web-420 GitHub Examples
=================================================================================================================
*/

// this script pulls all of the books in the books collection
db.books.find()

// displays a full list of books by genre
db.books.find({"genre": "Drama"});

// write a query to display a list of book by author
db.books.find({"author": "Charles Bukowski"});

// write a query to display a book by book Id
db.books.findOne({"bookId": "9780316310277"});

// display a wishlist for a customer Id
db.customers.findOne({"customerId": "16136"})

// Add books to a customer wish list
db.customers.updateOne(
    { _id: ObjectId('6452f803d4ec5d7b02c6553d')},
    { $push: { wishList: 
        {
            title: "Factotum",
            genre: "Drama",
            author: "Charles Bukowski",
            bookId: "10490124910",
        }
    }})

// Delete book from a customer wish list
db.customers.updateOne(
    { _id: ObjectId('6452f803d4ec5d7b02c6553d')},
    { $pull: { wishList: 
        {
            title: "Factotum",
            genre: "Drama",
            author: "Charles Bukowski",
            bookId: "10490124910",
        }
    }})



