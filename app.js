// import functions and grab DOM elements
import { books } from './books-data';
import { students } from './ array-students';

// initialize global state

let bookList = document.querySelector('.bookList');
let studentList = document.querySelector('.studentList');

for (let book of books) {
    let newBook = document.createElement('div');
    newBook = book;
    bookList.appendChild(newBook);
}

for (let student of students) {
    let newStudent = document.createElement('div');
    newStudent = student;
    studentList.appendChild(newStudent);
}

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
