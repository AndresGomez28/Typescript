"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.weekDay = exports.Week = void 0;
// 4.1 export
var Week;
(function (Week) {
    Week[Week["Monday"] = 0] = "Monday";
    Week[Week["Tuesday"] = 1] = "Tuesday";
    Week[Week["Wednesday"] = 2] = "Wednesday";
    Week[Week["Thursday"] = 3] = "Thursday";
    Week[Week["Friday"] = 4] = "Friday";
    Week[Week["Saturday"] = 5] = "Saturday";
    Week[Week["Sunday"] = 6] = "Sunday";
})(Week || (exports.Week = Week = {}));
function weekDay(day) {
    if (day === Week.Saturday || day === Week.Sunday) {
        return 'This day is not work, you can rest';
    }
    else {
        return 'This day is work, you should work';
    }
}
exports.weekDay = weekDay;
