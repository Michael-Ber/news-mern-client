const dateChangeToUTC = (date) => {
    const months = {
        0: 'January',
        1: 'February',
        2: 'March',
        3: 'April',
        4: 'May',
        5: 'June',
        6: 'July',
        7: 'August',
        8: 'September',
        9: 'October',
        10: 'November',
        11: 'December'
    };
    const dateEdited = new Date(date);
    const dateNow = new Date();
    return {
        utcYear: dateEdited.getUTCFullYear(),
        utcMonth: months[dateEdited.getUTCMonth()],
        utcDate: dateEdited.getUTCDate(),
        utcHours: dateEdited.getUTCHours(),
        utcMinutes: dateEdited.getUTCMinutes(),
        utcNowMonth: dateNow.getUTCMonth(),
        utcNowDate: dateNow.getUTCDate(),
        utcNowHours: dateNow.getUTCHours(),
        utcNowMinutes: dateNow.getUTCMinutes(),
    }
}

export default dateChangeToUTC;