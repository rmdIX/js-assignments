function parseDataFromRfc2822(value) {
    return new Date(value);
}

function parseDataFromIso8601(value) {
    return new Date(value);
}

function isLeapYear(date) {
    const year = date.getFullYear();
    if ((year % 4 !== 0) || (year % 100 === 0 && year % 400 !== 0)) {
        return false;
    } else {
        return true;
    }
}

function timeSpanToString(startDate, endDate) {
    const diff = endDate.getTime() - startDate.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60)).toString().padStart(2, '0');
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
    const seconds = Math.floor((diff % (1000 * 60)) / 1000).toString().padStart(2, '0');
    const milliseconds = diff % 1000;
    return `${hours}:${minutes}:${seconds}.${milliseconds.toString().padStart(3, '0')}`;
}

function angleBetweenClockHands(date) {
    const hour = date.getUTCHours() % 12;
    const minute = date.getUTCMinutes();
    const hourAngle = 0.5 * (hour * 60 + minute);
    const minuteAngle = 6 * minute;
    let angle = Math.abs(hourAngle - minuteAngle);
    angle = Math.min(360 - angle, angle);
    return (angle * Math.PI) / 180;
}

module.exports = {
    parseDataFromRfc2822,
    parseDataFromIso8601,
    isLeapYear,
    timeSpanToString,
    angleBetweenClockHands
};

