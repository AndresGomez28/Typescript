"use strict";
// 2.1
const sum = (numOne, numTwo) => {
    return numOne + numTwo;
};
console.log(sum(123, 123));
function shoWCarDetails(car) {
    return `${car.make} - Model: ${car.model} - Year: ${car.year}`;
}
console.log(`This car is a: ${shoWCarDetails({ make: 'Chevrolet', model: 'Optra', year: 2008 })}`);
//3.1
function firstElement(array) {
    return array.length ? array[0] : null;
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
console.log(firstElement(numbers));
const leathers = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
console.log(firstElement(leathers));
// 3.2
var Week;
(function (Week) {
    Week[Week["Monday"] = 0] = "Monday";
    Week[Week["Tuesday"] = 1] = "Tuesday";
    Week[Week["Wednesday"] = 2] = "Wednesday";
    Week[Week["Thursday"] = 3] = "Thursday";
    Week[Week["Friday"] = 4] = "Friday";
    Week[Week["Saturday"] = 5] = "Saturday";
    Week[Week["Sunday"] = 6] = "Sunday";
})(Week || (Week = {}));
function weekDay(day) {
    if (day === Week.Saturday || day === Week.Sunday) {
        return 'This day is not work, you can rest';
    }
    else {
        return 'This day is work, you should work';
    }
}
console.log(weekDay(Week.Saturday));
console.log(weekDay(Week.Monday));
// 5
