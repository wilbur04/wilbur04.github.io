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
//LEVEL 2
//ITERATION 3 – FIZZ BUZZ
function fizzBuzz(num, fizz, buzz) {
    for (var x = 1; x <= num; x++) {
        var temp = "";
        if (x % 3 === 0) {
            temp = temp.concat(fizz);
        }
        if (x % 5 === 0) {
            temp = temp.concat(buzz);
        }
        if (!temp) {
            temp = temp.concat(x);
        }
        console.log(temp);
    }
}
//ITERATION 4
function itteration4(num) {
    var itr = 0;
    while (num > 1) {
        if (num % 3 === 0) {
            console.log(num + ": Did nothing");
            num = num / 3;
            itr++;
        } else if ((num + 1) % 3 === 0) {
            console.log("added 1");
            num++;
        } else if ((num - 1) % 3 === 0) {
            console.log("removed 1");
            num--;
        }
    }
    console.log("loop ended with number : " + num + " in " + itr + " itterations");
}
//STRINGS 4
function strings4(str) {
    var count = 0;
    for (var y = 0; y < str.length - 2; y++) {
        if (str.charAt(y + 1) == str.charAt(y) && str.charAt(y + 2) == str.charAt(y)) {
            count++;
        }
    }
    console.log("String 4: has " + count + " triples.")
}
//DOM1
var para;
var div;
var t;
function createPara() {
    para = document.createElement("p");
    para.id = "someid"
    div = document.getElementById("dom1");
    t = document.createTextNode("New paragraph");
    para.appendChild(t);
    div.appendChild(para);
}
function changeParaText() {
    para.removeChild(t);
    t = document.createTextNode(document.getElementById('paraText').value);
    para.appendChild(t);
}
function deletePara() {
    div.removeChild(para);
}
function json1() {
    var requestURL = 'https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json'
    request.send();
    request.onload = function () {
        var requestData = request.response;
        var myH1 = document.createElement('h1');
        var myH2a = document.createElement('h2');
        var myH2b = document.createElement('h2');
        var myH2c = document.createElement('h2');
        var myH2d = document.createElement('h2');
        var myP = document.createElement('ul');
        myH1.textContent = requestData['squadName'];
        myH2a.textContent = "Home town: " + requestData['homeTown'];
        myH2b.textContent = "Formed: " + requestData['formed'];
        myH2c.textContent = "Secret base" + requestData['secretBase'];
        myH2d.textContent = "Members:";
        document.getElementById('shTextDiv').appendChild(myH1);
        document.getElementById('shTextDiv').appendChild(myH2a);
        document.getElementById('shTextDiv').appendChild(myH2b);
        document.getElementById('shTextDiv').appendChild(myH2c);
        document.getElementById('shTextDiv').appendChild(myH2d);
        var members = requestData['members'];
        for (var p = 0; p < members.length; p++) {
            var l1 = document.createElement("li");
            var l2 = document.createElement("li");
            var l3 = document.createElement("li");
            var l4 = document.createElement("li");
            var p5 = document.createElement('br');
            l1.append("Name: " + members[p]['name']);
            l2.append("Age: " + members[p]['age']);
            l3.append("Secret Identity: " + members[p]['secretIdentity']);
            l4.append('Powers: ');
            var powers = members[p]['powers'];
            for (var q = 0; q < powers.length; q++) {
                l4.append(" - " + powers[q]);
            }
            document.getElementById('shTextDiv').appendChild(l1);
            document.getElementById('shTextDiv').appendChild(l2);
            document.getElementById('shTextDiv').appendChild(l3);
            document.getElementById('shTextDiv').appendChild(l4);
            document.getElementById('shTextDiv').appendChild(p5);
        }
        document.getElementById('shTextDiv').appendChild(myP);
        console.log(requestData);
    }
}

function json2(name) {
    var requestURL = 'https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/kings.json';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json'
    request.send();
    request.onload = function () {
        var requestData = request.response;
        for (var j = 0; j < requestData.length; j++) {
            var contains = 0;
            if (requestData[j]['nm'] === name) {
                contains++;
            } else if (requestData[j]['cty'] === name) {
                contains++;
            } else if (requestData[j]['hse'] === name) {
                contains++;
            } else if (requestData[j]['yrs'] === name) {
                contains++;
            }
            if (contains) {
                console.log(requestData[j]['nm']);
                console.log(requestData[j]['cty']);
                console.log(requestData[j]['hse']);
                console.log(requestData[j]['yrs']);
            }
        }
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
//LEVEL 2
//ITERATION 3 – FIZZ BUZZ
fizzBuzz(100, "FIZZ", "BUZZ");
//itteraton4
itteration4(13);
//STRINGS4
strings4("xxxabyyyycd");
//json1
json1();
json2("House of Normandy");