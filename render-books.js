export function renderBooks(bookObject) {
    let bookDiv = document.createElement('div');
    bookDiv.classList.add('book-item');
    bookDiv.textContent = bookObject;
    return bookDiv;
}