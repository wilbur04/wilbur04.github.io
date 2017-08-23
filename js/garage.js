


let carList = [];

function checkIn() {
    let car = {
        model: document.getElementById('model').value,
        brand: document.getElementById('brand').value,
        reg: document.getElementById('reg').value,
        price: document.getElementById('price').value,
        doors: document.getElementById('doors').value
    }
    carList.push(car);
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
