// 4.1 export
export enum Week {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

export function weekDay (day: Week): String{
    if (day === Week.Saturday || day === Week.Sunday){
        return 'This day is not work, you can rest'
    } else {
        return 'This day is work, you should work'
    }
}