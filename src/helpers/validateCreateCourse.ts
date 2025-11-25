import { ErrorsObject } from '../components/CreateCourse/CreateCourse';
function validateCreateCourse<T extends Record<string, string>, A>(inputObject: T, authorsArray: A[], minLength: number,): ErrorsObject {
    const errorsObject: ErrorsObject = {};

    for (let key in inputObject) {

        if (key !== 'creationDate' && key !== 'authors') {
            const inputName = key.charAt(0).toUpperCase() + key.slice(1);

            if (!inputObject[key].trim() && key !== 'authors') {
                if (key === 'duration') {
                    errorsObject[key] = `duration is required and should be greater than 0`;
                }
                else { errorsObject[key] = `${key} is required and should be at least 2 characters`; }
            } else if ((key !== 'duration' && key !== 'authors') && (inputObject[key].length < minLength)) {
                errorsObject[key] = `${key} is required and should be at least 2 characters`;
            } else if ((key === 'duration') && (inputObject[key] === '0')) {
                errorsObject[key] = `The ${key} should be more than 0`;
            } else if ((key === 'authors') && authorsArray.length === 0) {
                errorsObject[key] = ' ';
            }
        }
    }
    return errorsObject;
}
export default validateCreateCourse;
