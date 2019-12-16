document.addEventListener("DOMContentLoaded", () => {
    // alert("hello")

    let book = {
        "id": 1,
        "title": "Picture Perfect",
        "description": "When her seven-year-old nephew, a hemophiliac, mysteriously disappears during their camping trip, pediatrician Lorrie Ryan races against time to find the missing boy with the help of FBI agent Stuart Saunders. Previously published as Panda Bear Is Critical. Reprint.",
        "img_url": "http://books.google.com/books/content?id=CEMZ1OoPDIAC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "users": [
          {
            "id": 2,
            "username": "auer"
          },
          {
            "id": 8,
            "username": "goodwin"
          }
        ]
    };

    let button = document.createElement('button')
    let body = document.querySelector('body')
    button.innerText = "LIKE!"
    body.appendChild(button)

    button.addEventListener("click", buttonClick())

    function button() {
        // Get the current user {"id":1, "username":"pouros"}
        let user =  {"id":1, "username":"pouros"}
        //
        fetch('http://localhost:3000/books', {
            method: 'PATCH',
            body: JSON.stringify(user),
          
            headers: {
              'Accept': 'application/json'
            }
    }
})