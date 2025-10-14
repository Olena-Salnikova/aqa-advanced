import Book from "./Book.js"; 
import EBook from "./EBook.js";

// Create instances of Book
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
const book2 = new Book("1984", "George Orwell", 1949);

// Create instances of EBook
const ebook1 = new EBook("Digital Fortress", "Dan Brown", 1998, "PDF");
const ebook2 = new EBook("The Martian", "Andy Weir", 2011, "ePub");

// Print information about the books
console.log("Printing book and ebook information:");
book1.printInfo();
book2.printInfo();
ebook1.printInfo();
ebook2.printInfo();
console.log("------------------"); 

// Array of all books
const allBooks = [book1, book2, ebook1, ebook2];

// Find and print the oldest book
console.log("Finding the oldest book in the collection:");
const oldestBook = Book.findOldestBook(allBooks);
console.log("The oldest book is:");
oldestBook.printInfo();
console.log("------------------");

// Create an EBook from a Book instance
console.log("Creating an EBook from a Book instance:");
const ebookFromBook = EBook.fromBook(book1, "MOBI");
book1.printInfo();
console.log("Converted to EBook:");
ebookFromBook.printInfo();
console.log("------------------");

// Using getters and setters
console.log(`Getting book title: ${  book1.title}`); // Getter   
book1.title = "The Great Gatsby - Updated"; // Setter
console.log(`Updating book title: ${  book1.title}`); // Getter after update