document.addEventListener("DOMContentLoaded", () => {
    const bookUrl = "http://localhost:3000/books";
    let button = document.createElement('button')
    button.innerText = "Like!"
    let bookData;

    function getBookData() {
        fetch(bookUrl)
        .then(response => response.json())
        .then(data => {
            bookData = data;
          console.log(bookData)
            displayBookData(bookData);
        })
    }

    function displayBookData(book) {
        let ul = document.getElementById('list');
        
        book.forEach(book => {
            let li = document.createElement('li')
            li.innerText = `${book.title}`
            ul.appendChild(li);
            console.log(li);

            li.addEventListener("click", function () {
                let showPanel= document.getElementById('show-panel')
                let bookPanel= document.createElement('div')
                let userArray = book.users
                userArray.forEach(user => {
                    let userElement = document.createElement('h2')
                    userElement.innerText = `${user.username}`
                    bookPanel.appendChild(userElement)
                    
                })
                showPanel.innerHTML = ' '
                let bookImg = document.createElement('img')
                let bookDescription= document.createElement('p')
                // let user = document.createElement('h2')
                // user.innerText = `${element.users[0].username}`
                bookDescription.innerText= book.description
                bookImg.src = book.img_url
                bookPanel.appendChild(bookImg)
                // bookPanel.appendChild(user)
                bookPanel.appendChild(bookDescription)
                showPanel.appendChild(bookPanel)
                showPanel.appendChild(button)
                button.addEventListener("click", () => buttonClick(book))

            })
        });

    }
    function buttonClick(book) {
        // Get the current user {"id":1, "username":"pouros"}
        let user =  {"id":1, "username":"pouros"}
        fetch(`http://localhost:3000/books/${book.id}`, {
            method: 'POST',
            body: JSON.stringify({
                "users": [
                    // Spread of the original Users array  in the book.
                    // We're putting this here because of the PATCH: we need to show the FULL data
                 ...book.users, 
                 // Here is where we add the new user like
                 user
                ]
              }),
            headers: {
              'Accept': 'application/json'
            }
        })
        .then(resp => resp.JSON())
        .then(data => {
            console.log(data)
        }) 
    }

    getBookData();



});
