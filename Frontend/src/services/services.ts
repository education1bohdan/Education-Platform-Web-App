export const fetchCourses = async () => {
    const response = await fetch('http://localhost:4000/courses/all');
    if (!response.ok) {
        throw new Error(`Courses loading error: ${response.status}`);
    }
    return await response.json();
}

export const fetchAuthors = async () => {
    const response = await fetch('http://localhost:4000/authors/all');
    if (!response.ok) {
        throw new Error(`Courses loading error: ${response.status}`);
    }
    return await response.json();
}

