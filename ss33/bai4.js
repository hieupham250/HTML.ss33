class Book {
    constructor(title, author, publishedYear) {
      this.title = title;
      this.author = author;
      this.publishedYear = publishedYear;
    }
    displayInfo() {
      console.log(`Tác phẩm: ${this.title}, Tác giả: ${this.author}, Năm xuất bản: ${this.publishedYear}`);
    }
}

class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(book) {
      this.books.push(book);
      console.log(`Sách "${book.title}" đã đc thêm vào thư viện.`);
    }
  
    displayLibrary() {
      console.log("sách trong thư viện");
      this.books.forEach((book) => {
        book.displayInfo();
      });
    }
}

let book1 = new Book("Đắc nhân tâm", "Dale Carnegie", 1936);
let book2 = new Book("Dế mèn", "Tô Hoài", 1941);
let book3 = new Book("Tam quốc diễn nghĩa", "La Quách Trung", 1522);

let library = new Library();
  
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
  
library.displayLibrary();
  