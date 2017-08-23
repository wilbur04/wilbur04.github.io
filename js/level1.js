var hello = "hello from Earth";
var strings1 = ' He said “My name is Elliott” '

function function1(num) {
    return num * num;
}
function function2(num1, num2, num3) {
    return num1 + num2 + num3;
}
var objVariables2 = {
    name: "bob",
    age: 23,
    occupation: "unemployed"
}
function events1() {
    console.log(objVariables2.age);
    objVariables2.age++;
    console.log(objVariables2.age);
}
function printName() {
    console.log(objVariables2.name);
}
//function 3/ event2
var person = {
    name: "",
    age: 0,
    occupation: ""
}
function event2() {
    person.name = document.getElementById('name').value;
    person.age = document.getElementById('age').value;
    person.occupation = document.getElementById('occupation').value;
    document.getElementById('editSubmit').value = "edit";
    console.log("event2");
    console.log("person2 :\n name: " + person.name + "\n age: " + person.age + "\n occupation: " + person.occupation);
}
function outputPerson() {
    document.getElementById("personText").innerHTML = "person2 - \n name: " + person.name + ",\n age: " + person.age + ",\n occupation: " + person.occupation;
    //document.write("person2 :\n name: "+person.name+"\n age: " +person.age +"\n occupation: "+person.occupation);
}
//conditionals 1
function isBetween20n40() {
    if (person.age >= 20 && person.age >= 40) {
        document.getElementById("isBetween2040").innerHTML = "true";
        return true;
    } else {
        document.getElementById("isBetween2040").innerHTML = "false";
    }
}




//document.write(hello);
//window.alert(hello);
console.log(hello);
console.log(function1(2));
console.log(function2(2, 4, 5));
//variables 2
console.log("variable 2 :\n name: " + objVariables2.name + "\n age: " + objVariables2.age + "\n occupation: " + objVariables2.occupation);
objVariables2.name = "alice";
objVariables2.age = 22;
objVariables2.occupation = "singer";
console.log("variable 2 :\n name: " + objVariables2.name + "\n age: " + objVariables2.age + "\n occupation: " + objVariables2.occupation);
//Strings 1
console.log("String: " + strings1);
var temp = strings1.toUpperCase();
strings1 = temp;
console.log("Uppercase " + strings1);
//Strings 2
console.log(hello + 2 + ".");
//Arrays1/ Strings3
var cars = ["Mercedes", "Audi", "BMW"];
console.log("Array1:  [" + cars.toString() + " ]");
cars.push("Ford");
console.log(" after push: \n Array1:  [ " + cars.toString() + " ]");
cars.pop();
console.log(" after remove: \n Array1:  [" + cars.toString() + " ]");
//iteration 1
for (var i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);

    }
}