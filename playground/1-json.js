

const book = {
    title:'SACRED SECRETS',
    author:'Preetha'
}

const bookJSON = JSON.stringify(book); // this is a string not a an object
                                       // it will only have the json string but you van't access teh object proprties like book.title or book.author
console.log(bookJSON); 

const parsedData=JSON.parse(bookJSON); //takes a JSON string and returns the JSON obj
console.log(parsedData.author);