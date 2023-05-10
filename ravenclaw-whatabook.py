# =================================================================================================================
# ; Title: WhatABook Console Application
# ; Author: RavenClaw
# ; Modified By: Chris Gorham, Caitlynne Johnson, Shane Hingtgen
# ; Bellevue University
# ; Date: 05/04/2023
# ; Description: Web 420 Group Project Console Application
# ; Work Cited:
#   Web 420 assignment 8
#   Web 420 what a book assignment document
#   Web 420 assignment 9
# =================================================================================================================
# import mongoclient
from pymongo import MongoClient
import datetime

# build connection string to connect to
client = MongoClient("mongodb+srv://what_a_book_admin:12345@bellevueuniversity.ut5xprd.mongodb.net/?retryWrites=true&w=majority")

# configure a variable to access the web335DB
db = client["what-a-book"]
print(client)

# delete the books and customers collections
db.books.drop()
db.customers.drop()

# creating our new books documents
whereTheRedFernGrows = {
  "title": "Where the Red Fern Grows",
  "genre": "autobiographical fiction",
  "author": "Wilson Rawls",
  "bookId": "0-440-22814-X",
}

postoffice = {
  "title": "Post Office",
  "genre": "Drama",
  "author": "Charles Bukowski",
  "bookId": "1039104810481",
}

factotum = {
  "title": "Factotum",
  "genre": "Drama",
  "author": "Charles Bukowski",
  "bookId": "10490124910",
}

thecruelprince = {
  "title": "The Cruel Prince",
  "genre": "Fantasy",
  "author": "Holly Black",
  "bookId": "9780316310277",
}

# creating our new customers documents
shane = {
  "firstName": "Shane",
  "lastName": "Hingtgen",
  "customerId": "c1007",
  "wishList": [
    {
      "title": "Where the Red Fern Grows",
      "genre": "autobiographical fiction",
      "author": "Wilson Rawls",
      "bookId": "0-440-22814-X",
    },
    {
      "title": "Factotum",
      "genre": "Drama",
      "author": "Charles Bukowski",
      "bookId": "10490124910",
    },
  ],
}

chris = {
  "firstName": "Chris",
  "lastName": "Gorham",
  "customerId": "c1008",
  "wishList": [
    {
      "title": "Where the Red Fern Grows",
      "genre": "autobiographical fiction",
      "author": "Wilson Rawls",
      "bookId": "0-440-22814-X",
    },
    {
      "title": "The Cruel Prince",
      "genre": "Fantasy",
      "author": "Holly Black",
      "bookId": "9780316310277",
    },
  ],
}

cait = {
  "firstName": "Cait",
  "lastName": "Johnson",
  "customerId": "c1009",
  "wishList": [
    {
      "title": "The Cruel Prince",
      "genre": "Fantasy",
      "author": "Holly Black",
      "bookId": "9780316310277",
    },
    {
      "title": "Post Office",
      "genre": "Drama",
      "author": "Charles Bukowski",
      "bookId": "1039104810481",
    },
  ],
}


# adding our new books documents
redfern = db.books.insert_one(whereTheRedFernGrows).inserted_id

prince = db.books.insert_one(thecruelprince).inserted_id

factotum = db.books.insert_one(factotum).inserted_id

post = db.books.insert_one(postoffice).inserted_id

# adding our new customers documents
shane = db.customers.insert_one(shane).inserted_id
chris = db.customers.insert_one(chris).inserted_id
cait = db.customers.insert_one(cait).inserted_id


# display a list of books
print (" ")
print("Displaying a list of books:")
for book in db.books.find({}):
    print (" ")
    print(book)

# display a list of books by genre
print (" a")
print("Select which Genre:")
choice = input(
"""
Select Function: 
a. Drama
b. Fantasy
c. autobiographical fiction           
""")
# if else statement that will call the functions based on choice
if choice == "a":
    print("Displaying a list of books by Drama:")
    for book in db.books.find({"genre": "Drama"}, {"title": 1, "genre": 1, "author": 1, "bookId": 1}):
        print(book) 
elif choice =="b":
    print("Displaying a list of books by Fantasy:")
    for book in db.books.find({"genre": "Fantasy"}, {"title": 1, "genre": 1, "author": 1, "bookId": 1}):
        print(book) 
elif choice =="c":
    print("Displaying a list of books by autobiographical fiction:")
    for book in db.books.find({"genre": "autobiographical fiction"}, {"title": 1, "genre": 1, "author": 1, "bookId": 1}):
        print(book) 

# display wishlist based on customerId input
choice = input(
"""
Input customerId to display wishlist: 

""")
# if statement finds customerId then it will post the wishlist, or if not found it will display a message of invalid customerId
if db.customers.count_documents({"customerId": choice}) > 0:
    for book in db.customers.find({"customerId": choice}, {"wishList": 1}):
        print(book)
else:
    print("Invalid customerId")
