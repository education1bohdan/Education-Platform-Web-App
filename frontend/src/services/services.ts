import { BASE_URL } from "@/constants";
export const fetchCourses = async () => {
    const response = await fetch(`${BASE_URL}/courses/all`);
    if (!response.ok) {
        throw new Error(`Courses loading error: ${response.status}`);
    }
    return await response.json();
}

export const fetchAuthors = async () => {
    const response = await fetch(`${BASE_URL}/authors/all`);
    if (!response.ok) {
        throw new Error(`Courses loading error: ${response.status}`);
    }
    return await response.json();
}

