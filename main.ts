//DAY 45
//TASK 1 (Write a JS object and convert into a JSON string)
let person = {
    name: "Yemna",
    age: 22,
    city: "Karachi"
};
let jsonString = JSON.stringify(person);
console.log(jsonString);
//it simply converts an object to a JSON string makes easy to store.

//TASK 2 (Take JSON string and parsed it into JS object)
let jsonstring = `{"name": "Yemna","age": 22, "city": "Karachi"}`;
let perSon = JSON.parse(jsonstring);
console.log(perSon);
//it simply shows how to take JSON string and convert into JS object.

//TASK 3 (Explain how you can format JSON string with proper identation for readability)
let human = {
    name: "Yemna",
    age: 22,
    city: "Karachi"
};
let jsoNString = JSON.stringify(human, null ,2); //2 shows the no of space to use as white space 
console.log(jsoNString);
//it shows how adding identation to the JSON string makes it easier to read