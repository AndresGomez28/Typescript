// 2.1
const sum = (numOne: number, numTwo: number): Number => {
    return numOne + numTwo;
}
console.log(sum(123,123))


// 2.2
interface Car {
    make: String
    model: String
    year: Number
}

function shoWCarDetails(car: Car): String {
    return `${car.make} - Model: ${car.model} - Year: ${car.year}`
}
console.log(`This car is a: ${shoWCarDetails({make: 'Chevrolet', model: 'Optra', year: 2008})}`)


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

function weekDay (day: Week): String{
    if (day === Week.Saturday || day === Week.Sunday){
        return 'This day is not work, you can rest'
    } else {
        return 'This day is work, you should work'
    }
}
console.log(weekDay(Week.Saturday));
console.log(weekDay(Week.Monday));


// 5
