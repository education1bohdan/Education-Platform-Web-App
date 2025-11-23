import { Authors } from '../components/Courses/Courses'

export default function getAuthorsNames(authors: string[], authorsList: Authors[]): string[] {
    return authors
        .map(authorId => authorsList.find((author) => author.id === authorId)?.name).filter(Boolean)
        .filter((name): name is string => name !== undefined);
};
