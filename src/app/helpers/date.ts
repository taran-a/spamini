export const format = (date: number) => {
    const dateObj = new Date(date);
    const minutes = dateObj.getMinutes();
    const hours = dateObj.getHours();
    return `${hours}:${ minutes < 10 ? '0' + minutes : minutes }`;
};
