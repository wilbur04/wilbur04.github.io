


let carList = [];

function checkIn() {
    let car = {
        model: document.getElementById('model').value,
        brand: document.getElementById('brand').value,
        reg: document.getElementById('reg').value,
        price: document.getElementById('price').value,
        doors: document.getElementById('doors').value,
        faults: true
    }
    carList.push(car);
    window.alert("Check in complete");
    console.log(carList.length);
}

function checkOut() {
    let removed = 0;
    for (let i = 0; i < carList.length; i++) {
        if (carList[i].reg === document.getElementById('regOut').value) {
            window.alert(`Removed a ${carList[i].brand} ${carList[i].model}.`);
            carList.splice(i, 1);
            removed++;
        }
        if (!removed) {
            window.alert(`Couldn't find a car with reg ${document.getElementById('regOut').value}.`);
        }
    }
}

function outputGarage() {
    let myul = document.createElement('ul');
    for (let i = 0; i < carList.length; i++) {
        let myli = document.createElement('li');
        myli.append(document.createTextNode(carList[i].brand + " - "));
        myli.append(document.createTextNode(carList[i].model + "   reg: "));
        myli.append(document.createTextNode(carList[i].reg + "."));
        myul.appendChild(myli);
    }
    document.getElementById('listgarage').appendChild(myul);
}

function getBill() {
    let found = 0;
    let bill = 50;
    for (let i = 0; i < carList.length; i++) {
        if (carList[i].reg === document.getElementById('regBill').value) {
            bill = bill + (carList.get[i].doors * 20);
            bill += (carList.get[i].price / 100);
            window.alert(`The bill was ${bill}.`);
            found++;
        }
        if (!found) {
            window.alert(`Couldn't find a car with reg ${document.getElementById('regBill').value}.`);
        }
    }
}
/* CLI  */
let garage = []; //cars stored after check in
function createCar(brand, reg, doors, faults) {
    let car = {
        model: "unknown",
        brand: brand,
        reg: reg,
        price: 0,
        doors: 4,
        faults: faults
    }
    carList.push(car);
    document.getElementById('cliOutput').append("> Check in complete" + "\n");
    // window.alert("Check in complete");
}

function cliOutput() {
    let myul = document.createElement('ul');
    for (let i = 0; i < carList.length; i++) {
        document.getElementById('cliOutput').append(`${i + 1}: ${carList[i].brand}, Reg: ${carList[i].reg}` + `\n`);
    }
}

function cliCheckIn(regi) {
    let found = 0;
    for (let i = 0; i < carList.length; i++) {
        if (carList[i].reg === regi) {
            garage.push(carList[i]);
            found++;
            document.getElementById('cliOutput').append("> Car added to garage." + "\n");
        }
    } if (!found) {
        document.getElementById('cliOutput').append("> Car not found. Please create car." + "\n");
    }
}

function cliCheckOut(regi) {
    let found = 0;
    let bill = 50;
    for (let i = 0; i < garage.length; i++) {
        if (garage[i].reg === regi) {
            console.log(garage[i].doors);
            bill = bill + (garage[i].doors * 20);
            found++;
            document.getElementById('cliOutput').append(" the Bill was: \£" + bill + "\n");
            document.getElementById('cliOutput').append("> Car removed." + "\n");
            garage.splice(i, 1);
        }
    } if (!found) {
        document.getElementById('cliOutput').append("> Car not found. Please check in car." + "\n");
    }
}


function cli() {
    let input = document.getElementById('cliInput').value;
    document.getElementById('cliOutput').append("$ " + input + "\n");
    let arr = input.split(" ");
    if (input.includes("create car")) {
        if (arr.length === 6) {
            let hasFaults;
            if (arr[5] === "NOFAULTS") {
                hasFaults = false;
            } else {
                hasFaults = true;
            }
            createCar(arr[2], arr[3], parseInt(arr[4]), arr[5]);
        } else {
            document.getElementById('cliOutput').append("> invalid command" + "\n");
        }

    } else if (input.includes("output Garage")) {
        cliOutput();
    } else if (input.includes("check in")) {
        cliCheckIn(arr[2]);
    } else if (input.includes("check out")) {
        cliCheckOut(arr[2]);
    } else {
        document.getElementById('cliOutput').append("> invalid command" + "\n");
    }


}
