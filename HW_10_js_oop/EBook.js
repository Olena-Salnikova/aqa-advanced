import Book from './Book.js';

class EBook extends Book {
    constructor(title, author, year, format) {
        super(title, author, year); // Call the parent class constructor
        this.format = format; // New property for EBook
    }

// Getter and Setter for format
    get format() {
        return this._format;
    }
    set format(value) {
        const validFormats = ["PDF", "EPUB", "MOBI"];
        const upperValue = value.toUpperCase();
        if (!validFormats.includes(upperValue)) {
            throw new Error(`Format must be one of the following: ${validFormats.join(", ")}`);
        }
        this._format = upperValue;
    }

// Method to print ebook information
    printInfo() {
        super.printInfo();
        console.log(`Format: ${this.format}`);
    }

// Static method to create an EBook from a Book instance
    static fromBook(bookInstance, format) {
        if (!(bookInstance instanceof Book)) {
            throw new Error("Argument must be an instance of Book.");
        }
        return new EBook(bookInstance.title, bookInstance.author, bookInstance.year, format);
    }
}

export default EBook;
