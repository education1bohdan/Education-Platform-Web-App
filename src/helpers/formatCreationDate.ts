function formatCreationDate(data: string): string {
    if (data[2] === '/') {
        return data.replace(/\//g, ".");
    } else {
        return data;
    }
}

export default formatCreationDate;
