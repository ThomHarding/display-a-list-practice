// import functions and grab DOM elements
import { books } from './array-books';

// initialize global state

let bookList = document.querySelector('.bookList');

for (let book of books) {
    let newBook = document.createElement('div');
    newBook = book;
    bookList.appendChild(newBook);
}
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
