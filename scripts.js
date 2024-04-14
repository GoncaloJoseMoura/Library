let myLibrary = [];

function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read == 'Yes';
    // this.info = () => title + ' by ' + author + ', ' + pages + ' pages, ' + (like? 'enjoyed it': 'did not like it very much') 
};


myForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent default submission
    const formData = new FormData(myForm);
    const book1 = new Book(...formData.values())
    const tr = document.createElement('tr')

    tr.innerHTML = `
            <tr>
                <td> ${book1.title} </td>
                <td> ${book1.author} </td>
                <td> ${book1.pages} </td>
                <td> ${book1.read} </td>
                <td>
                <button type="button" class="remove">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 24 24"><path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" /></svg>
                </button>
                </td>
            </tr>`

    table = document.querySelector('tbody');
    table.appendChild(tr)

    const remove_button = tr.querySelector('.remove');
    remove_button.addEventListener('click', (event) => {
        event.target.closest('tr').remove();
    });
});