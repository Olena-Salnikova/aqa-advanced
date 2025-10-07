class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

// Getter and Setter for title
    get title() {
        return this._title;
    }
    set title(value) {
        if (typeof value !== "string" || value.trim() === "") {
            throw new Error("Title must be a non-empty string.");
        }
        this._title = value;
    }

// Getter and Setter for author
    get author() {
        return this._author;
    }   
    set author(value) {
        if (typeof value !== "string" || value.trim() === "") {
            throw new Error("Author must be a non-empty string.");
        }
        this._author = value;
    }

// Getter and Setter for year
    get year() {
        return this._year;
    }   
    set year(value) {
        if (!Number.isInteger(value) || value <= 0) {
            throw new Error("Year must be a positive integer.");
        }
        if (value > new Date().getFullYear()) {
            throw new Error("Year cannot be in the future.");
        }   
        this._year = value;
    }

// Method to print book information
    printInfo() {
        console.log(`Title of book: ${this.title}, Author: ${this.author}, Year of publication: ${this.year}`);
    }

// Static method to find the oldest book in an array

    static findOldestBook(booksArray) {
    if (!Array.isArray(booksArray) || booksArray.length === 0) {
        throw new Error("Input must be a non-empty array of Book instances.");
    }
    return booksArray.reduce((oldest, current) => (current.year < oldest.year ? current : oldest));
    }
}

export default Book;