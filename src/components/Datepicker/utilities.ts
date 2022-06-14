export const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

export const getDaysInMonth = (month: number, year: number) => {
    var date = new Date(year, month, 1);
    var days = [];
    while (date.getMonth() === month) {
        days.push(new Date(date));
        date.setDate(date.getDate() + 1);
    }
    return days;
};

export const getWeeks = (
    prevMonth: Date[],
    currentMonth: Date[],
    nextMonth: Date[]
): number[] => {
    const arr = currentMonth.map((x) => x.getDate());

    const firstDay = currentMonth[0].getDay();

    const lastDay = currentMonth[currentMonth.length - 1].getDay();

    const prevMonthDays = prevMonth
        .slice(prevMonth.length - firstDay, prevMonth.length)
        .sort((a, b) => b.getDate() - a.getDate());
    prevMonthDays.map((x) => arr.unshift(x.getDate()));

    const nextMonthDays = nextMonth.slice(0, 6 - lastDay);
    nextMonthDays.map((x) => arr.push(x.getDate()));

    return arr;
};

export const intervalRecursive = (
    x: number,
    y: number,
    accum: number[] = []
): number[] => {
    if (x + 1 === y) return accum;
    return intervalRecursive(x + 1, y, accum.concat(x + 1));
};
