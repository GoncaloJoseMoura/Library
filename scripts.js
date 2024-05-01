class Book {

    static myLibrary = []

    constructor (author, title, pages, read) {
        this.author = author
        this.title = title
        this.pages = pages
        this.read = (read == 'on') ? true : false

        Book.myLibrary.push(this)
    };

    static removeBook(index) {
        Book.myLibrary.splice(index, 1);
        Book.createBookCard();
    }
    
    static createBookCard() {
    
        const card_layout = document.querySelector('.card-layout')
        card_layout.textContent = ''
    
        Book.myLibrary.forEach((value, index) => {
    
            const div = document.createElement('div')
            div.className = 'card'
    
            div.innerHTML = `
            <p class="card-title">${value.title}</p>
            <p class="card-author">${value.author}</p>
            <p class="card-pages">${value.pages} Pages</p>
            <div>
                <button class="card-read">${value.read ? 'Read': 'Not Read'}</button>
                <svg xmlns="http://www.w3.org/2000/svg" width="29" heigth="29" viewBox="0 0 24 24"><path fill="currentColor" d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg>
            </div>
            `

            card_layout.appendChild(div)
    
            div.querySelector('button').addEventListener('click', (event) => {
                Book.myLibrary[index].read = Book.myLibrary[index].read ? false : true
                event.target.textContent = Book.myLibrary[index].read ? 'Read' : 'Not Read' 
            })

            div.querySelector('svg').addEventListener('mouseout', (event) => {
                event.target.innerHTML = `<path fill="currentColor" d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />`
            })

            div.querySelector('svg').addEventListener('mouseover', (event) => {
                event.target.innerHTML = `<path fill="currentColor" d="M20.37,8.91L19.37,10.64L7.24,3.64L8.24,1.91L11.28,3.66L12.64,3.29L16.97,5.79L17.34,7.16L20.37,8.91M6,19V7H11.07L18,11V19A2,2 0 0,1 16,21H8A2,2 0 0,1 6,19Z" />`
            })
    
            div.querySelector('svg').addEventListener('click', () => Book.removeBook(index))       
    
        })
    
    }

}

book1 = new Book('Rick Riordan', 'Percy Jackson and the Olympians: The Lightning Thief', '294', 'on')
book2 = new Book('J. R. R. Tolkien', 'The Hobbit', '500', 'on')
book3 = new Book('Andrzej Sapkowski', 'Sword Of Destiny', '384', undefined)

Book.createBookCard();

const form = document.querySelector('form')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    const formData = new FormData(form)

    let book = new Book(...formData.values())
    Book.createBookCard()

    document.querySelector('dialog').close()
    form.reset()
    }
)