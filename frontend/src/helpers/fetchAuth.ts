import { BASE_URL } from "@/constants";
const fetchAuth = async <T>(newUser: T, path: string) => {
    try {
        const response = await fetch(`${BASE_URL}${path}`, {
            method: 'POST',
            body: JSON.stringify(newUser),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.log(errorData)
            throw new Error(errorData.errors || errorData.result);
        }

        const result = await response.json();
        return result;

    } catch (error) {
        throw error;
    }
}

export default fetchAuth;
