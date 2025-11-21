import { ErrorsObject } from '../components/CreateCourse/CreateCourse';
function validateCreateCourse<T extends Record<string, string>>(object: T, minLength: number): ErrorsObject {
    const errorsObject: ErrorsObject = {};

    for (let key in object) {

        if (key !== 'id' && key !== 'creationDate') {
            const inputName = key.charAt(0).toUpperCase() + key.slice(1);

            if (!object[key].trim()) {
                errorsObject[key] = `${inputName} is required`;
            } else if ((key !== 'duration') && (object[key].length < minLength)) {
                if (key === 'authors') {
                    errorsObject[key] = `The ${key}' names should be at least ${minLength} characters long`;
                } else {
                    errorsObject[key] = `The ${key} should be at least ${minLength} characters long`;
                }
            } else if ((key === 'duration') && (object[key] === '0')) {
                errorsObject[key] = `The ${key} should be more than 0`;
            }
        }
    }
    return errorsObject;
}
export default validateCreateCourse;




// function validateCreateCourse<T extends object>(object: T, minLength: number): ErrorsObject {
//     const errorsObject: ErrorsObject = {};

//     for (let key in object) {

//         const value = object[key as keyof T];

//         if (typeof value === 'string' && key !== 'id' && key !== 'creationDate') {
//             const inputName = key.charAt(0).toUpperCase() + key.slice(1);

//             if (!value.trim()) {
//                 errorsObject[key] = `${inputName} is required`;
//             } else if ((key !== 'duration') && (object[key].length < minLength)) {
//                 if (key === 'authors') {
//                     errorsObject[key] = `The ${key}' names should be at least ${minLength} characters long`;
//                 } else {
//                     errorsObject[key] = `The ${key} should be at least ${minLength} characters long`;
//                 }
//             } else if ((key === 'duration') && (object[key] === '0')) {
//                 errorsObject[key] = `The ${key} should be more than 0`;
//             }
//         }
//     }
//     return errorsObject;
// }
