const dateChangeToUTC = (date) => {
    const dateEdited = new Date(date);
    const dateNow = new Date();
    return {
        utcMonth: dateEdited.getUTCMonth(),
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