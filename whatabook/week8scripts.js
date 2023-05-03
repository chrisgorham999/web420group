/*
==============================================================================
; Title: week8scripts.js
; Author: House RavenClaw
; Modified by: Chris Gorham, Caitlynne Johnson, Shane Hingtgen
; Bellevue University
; Date: 05/03/2023
; Description: Group project for What a Book week 2
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