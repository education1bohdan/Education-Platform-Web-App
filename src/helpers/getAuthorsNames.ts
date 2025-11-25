import { Authors } from '../components/Courses/Courses'

export default function getAuthorsNames(authors: string[], authorsList: Authors[]): string {
    const authorNames = authors.map(authorId => authorsList.find(author => author.id === authorId)?.name)
        .filter(name => name !== undefined)
        .join(", ");
    return authorNames;
};
