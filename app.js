// import functions and grab DOM elements
import { books } from './books-data.js';
import { students } from './students-data.js';
import { dogs } from './dogs-data.js';
import { countries } from './countries-data.js';
import { renderBooks } from './render-books.js';
import { renderStudents } from './render-students.js';
import { renderDogs } from './render-dogs.js';
import { renderCountries } from './render-countries.js';


// initialize global state

let bookList = document.querySelector('.bookList');
let studentList = document.querySelector('.studentList');
let dogList = document.querySelector('.dogList');
let countryList = document.querySelector('.countryList');

for (let book of books) {
    bookList.appendChild(renderBooks(book));
}

for (let student of students) {
    studentList.appendChild(renderStudents(student));
}

for (let dog of dogs) {
    dogList.appendChild(renderDogs(dog));
}

for (let country of countries) {
    countryList.appendChild(renderCountries(country));
}

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
