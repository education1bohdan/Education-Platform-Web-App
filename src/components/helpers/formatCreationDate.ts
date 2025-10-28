export default function formatCreationDate(data: string): string {
    return data.replace(/\//g, ".");
}

// import { mockedCoursesList } from "../../constants";

// type Course = {
//     id: string;
//     title: string;
//     description: string;
//     creationDate: string;
//     duration: number;
//     authors: string[];
// }

// type formattedCourse = {
//     id: string,
//     creationDate: string,
// }

// const courses = mockedCoursesList as Course[];

// export default function formatCreationDate(): formattedCourse[] {
//     let formattedArray: formattedCourse[] = [];
//     for (let object of courses) {
//         let formattedDate = object.creationDate.replace(/\//g, ".");
//         formattedArray.push({
//             id: object.id,
//             creationDate: formattedDate,
//         })
//     }
//     return formattedArray;
// }

