let myLibrary = [
new Book('Rick Riordan', 'Percy Jackson and the Olympians: The Lightning Thief', '294', 'on'),
new Book('J. R. R. Tolkien', 'The Hobbit', '500', 'on'),
new Book('Andrzej Sapkowski', 'Sword Of Destiny', '384', undefined),];

function Book(author, title, pages, read) {
    this.author = author
    this.title = title
    this.pages = pages
    this.read = (read == 'on') ? 'Read' : 'Not Read'
}

function addBookToLibrary(form_result) {
  myLibrary.push(new Book(...form_result.values()))
}

function createBookCard() {

    const card_layout = document.querySelector('.card-layout')
    card_layout.textContent = ''

    myLibrary.forEach((value, index) => {

        const div = document.createElement('div')
        div.className = 'card'

        div.innerHTML = `
        <p class="card-title">${value.title}</p>
        <p class="card-author">${value.author}</p>
        <p class="card-pages">${value.pages} Pages</p>
        <div>
            <button class="card-read">${value.read}</button>
            <svg xmlns="http://www.w3.org/2000/svg" width="29" heigth="29" viewBox="0 0 24 24"><path fill="currentColor" d="M20.37,8.91L19.37,10.64L7.24,3.64L8.24,1.91L11.28,3.66L12.64,3.29L16.97,5.79L17.34,7.16L20.37,8.91M6,19V7H11.07L18,11V19A2,2 0 0,1 16,21H8A2,2 0 0,1 6,19Z" /></svg>
        </div>
        `

        div.querySelector('button').addEventListener('click', (event) => {
            let status = event.target.textContent == 'Read'? 'Not Read' : 'Read'
            event.target.textContent = status
            myLibrary[index].read = status
        })

        div.querySelector('svg').addEventListener('click', () => {
            myLibrary.splice(index, 1);
            createBookCard();
        })        

        card_layout.appendChild(div)

    })

}

createBookCard();

const form = document.querySelector('form')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    const formData = new FormData(form)

    addBookToLibrary(formData)
    createBookCard()

    document.querySelector('dialog').close()
    form.reset()
    }

)