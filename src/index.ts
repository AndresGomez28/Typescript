// 2.1
const sum = (numOne: number, numTwo: number): Number => {
    return numOne + numTwo;
}

console.log(sum(888,112))


// 2.2
interface Car {
    make: String
    model: String
    year: Number
}

function shoWCarDetails(car: Car): String {
    return `${car.make} ${car.model} ${car.year}`
}

console.log(shoWCarDetails({make: 'Toyota', model: 'Hilux', year: 2004}))


//3.1
function firstElement<T>(array: T[]): T | null{
    return array.length ? array[0] : null;
}

const numbers: Number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
console.log(firstElement(numbers));

const leathers: String[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h','i', 'j'];
console.log(firstElement(leathers));


// 3.2
enum Week {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

function weekday (day: Week): String{
    if (day === Week.Saturday || day === Week.Sunday){
        return 'This day is work'
    } else {
        return 'This day is not work'
    }
}

console.log(weekday(Week.Saturday));
console.log(weekday(Week.Monday));


// 5
