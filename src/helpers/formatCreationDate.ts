function formatCreationDate(data: string): string {
    return data.replace(/\//g, ".");
}

export default formatCreationDate;
