
function validateCourseAuthors(authorName: string, minLength?: number, maxLength?: number): string {
    let errorMessage: string = '';
    const name = authorName.trim()
    if (!name) {
        errorMessage = 'Author name is required';
    } else if (minLength && name.length < minLength) {
        errorMessage = `author name should be at least 2 characters`;
    } else if (maxLength && name.length > maxLength) {
        errorMessage = `The name should be no longer than ${maxLength} characters`;
    }

    return errorMessage;
}
export default validateCourseAuthors;
