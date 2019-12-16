document.addEventListener("DOMContentLoaded", () => {
    const bookUrl = "http://localhost:3000/books";
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
        
        book.forEach(element => {
            let li = document.createElement('li')
            li.innerText = `${element.title}`
            ul.appendChild(li);
            console.log(li);

            li.addEventListener("click", function () {
                let showPanel= document.getElementById('show-panel')
                let bookPanel= document.createElement('div')
                let userArray = element.users
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
                bookDescription.innerText= element.description
                bookImg.src = element.img_url
                bookPanel.appendChild(bookImg)
                // bookPanel.appendChild(user)
                bookPanel.appendChild(bookDescription)
                showPanel.appendChild(bookPanel)

    

            })
        });

    }


    getBookData();



});
