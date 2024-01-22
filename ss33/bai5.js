class Book {
    constructor(title, author, publishedYear) {
      this.title = title;
      this.author = author;
      this.publishedYear = publishedYear;
      this.isAvailable = true;
    }
  
    borrow() {
      if (this.isAvailable) {
        this.isAvailable = false;
        console.log(`sách "${this.title}" đã đc trả lại`);
      } else {
        console.log(`sách "${this.title}" không có sẵn`);
      }
    }
  
    returnBook() {
      if (!this.isAvailable) {
        this.isAvailable = true;
        console.log(`sách "${this.title}" đã đc trả lại`);
      } else {
        console.log(`sách "${this.title}" đã có sẵn`);
      }
    }
}
  
class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(book) {
      this.books.push(book);
      console.log(`sách "${book.title}" đã thêm vào thư viện.`);
    }
  
    isBookAvailable(title) {
      let book = this.books.find((book) => book.title === title);
      if (book) {
        return book.isAvailable;
      } else {
        console.log(`không tìm thấy sách "${title}" trong thư viện.`);
        return false;
      }
    }
}
  
let book1 = new Book("Đắc nhân tâm", "Dale Carnegie", 1936);
let book2 = new Book("Dế mèn", "Tô Hoài", 1941);
let book3 = new Book("Tam quốc diễn nghĩa", "La Quách Trung", 1522);
  
let library = new Library();
  
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
  
console.log("Có thể mượn sách Dế mèn không?", library.isBookAvailable("Dế mèn"));
  
book2.borrow();
book2.returnBook();
  
console.log("Có thể mượn sách Tam quốc diễn nghĩa không?", library.isBookAvailable("Tam quốc diễn nghĩa"));
  