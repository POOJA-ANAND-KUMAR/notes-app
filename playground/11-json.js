const fs = require('fs');
const fromfile = require('./11-json.json');

const book = {
    title:'SACRED SECRETS',
    author:'Preetha'
}

const bookJSON = JSON.stringify(book); 

fs.writeFileSync('11-json.json',bookJSON);

const dataBuffer = fs.readFileSync('11-json.json'); //will return binary data
const dataJSON =dataBuffer.toString();
const data=JSON.parse(dataJSON);

console.log(dataBuffer);
console.log(dataJSON);
console.log(data.title);


//load and parse JSON data
//change age and name property using your info
//stringify the changed obj and overwrite the original data
//test the work by viewing data in the JSON file

const dataBuffer = fs.readFileSync('11-json.json'); 
const dataJSON =dataBuffer.toString();
const user =JSON.parse(dataJSON);

user.name="POO";
user.age="26";

const userJSON = JSON.stringify(user);
fs.writeFileSync('11-json.json',userJSON);






 