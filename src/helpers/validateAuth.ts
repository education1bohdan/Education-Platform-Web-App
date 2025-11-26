import { ErrorsObject } from '../components/Authentification/Registration/Registration';

function validateForm<T extends Record<string, string>>(object: T): ErrorsObject | {} {
    const errorsObject: Partial<Record<keyof T, string>> = {};
    const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    for (let key in object) {

        const inputName = key.charAt(0).toUpperCase() + key.slice(1);

        if (!object[key].trim()) {
            errorsObject[key] = `${inputName} is required`;
        } else if (key === 'email' && !emailRegExp.test(object[key].trim())) {
            errorsObject[key] = `${inputName} should be valid`;
        }
    }
    return errorsObject;
}
export default validateForm;
