function formatCreationDate(date: string = '00.00.2025'): string {
    if (date[2] === '/') {
        return date.replace(/\//g, ".");
    } else {
        const today = new Date();

        const day = String(today.getDate()).padStart(2, "0");
        const month = String(today.getMonth() + 1).padStart(2, "0");
        const year = today.getFullYear();

        return `${day}.${month}.${year}`;
    }
}

export default formatCreationDate;
