class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

const bookName = document.querySelector('#book-name');
const authName = document.querySelector('#author');
const isbn = document.querySelector('#isbn');
const submit = document.querySelector('#btn');
const bookForm = document.querySelector('#form');
const heading = document.querySelector('h1');
const entry = document.querySelector('.entry');

loadEventListeners();

function loadEventListeners() {
    bookForm.addEventListener('submit', addbook);
}

function addbook(e) {
    const bname = bookName.value;
    const aname = authName.value;
    const isbnNum = isbn.value;

    if (bname === '' || aname === '' || isbnNum === '') {
        showError('Fill book details');

    } else {
        bookName.value = '';
        authName.value = '';
        isbn.value = '';

        const content = new Book(bname, aname, isbnNum);
        const entries = document.createElement('div');
        entries.className = 'entries';

        const titleDiv = document.createElement('p');
        const authorDiv = document.createElement('p');
        const isbnDiv = document.createElement('p');
        const delIcon = document.createElement('a');

        delIcon.setAttribute('href', '#');

        titleDiv.textContent = content.title;
        authorDiv.textContent = content.author;
        isbnDiv.textContent = content.isbn;
        delIcon.appendChild(addDeleteIcon());

        entries.appendChild(titleDiv);
        entries.appendChild(authorDiv);
        entries.appendChild(isbnDiv);
        entries.appendChild(delIcon);

        entry.appendChild(entries);

        delIcon.addEventListener('click', deleteEntry);
    }
    e.preventDefault();
}

function addDeleteIcon() {
    const icon = document.createElement('i');
    icon.className = 'far fa-trash-alt';
    return icon;
}

function deleteEntry() {
    if (confirm('Are You Sure ?')) {
        document.querySelector('.entries').remove();
        showConfirm('Book deatils Removed Successfully');
    }
}

function showConfirm(error) {
    const conDiv = document.createElement('div');
    conDiv.className = 'bg-green';
    conDiv.appendChild(document.createTextNode(error));
    bookForm.insertBefore(conDiv, heading);
    setTimeout(clearConfirm, 3000);
}

function showError(error) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'bg-red';
    errorDiv.appendChild(document.createTextNode(error));
    bookForm.insertBefore(errorDiv, heading);
    setTimeout(clearError, 3000);
}

function clearError() {
    document.querySelector('.bg-red').remove();
}

function clearConfirm() {
    document.querySelector('.bg-green').remove();
}
