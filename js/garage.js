
let car = {
    model: "",
    brand: "",
    reg: "",
    bill: 0
}

let carList = [];

function checkIn() {
    car.model = "ford";
    car.brand = "jag";
    car.reg = "dfg ";
    car.bill = 3485;

    carList.concat(car);

    console.log(carList.length);
}

checkIn();