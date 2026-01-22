import { Author } from '../constants';

export default function getAuthorsNames(authors: string[], authorsList: Author[]): string {
    const authorNames: string = authors.map(authorId => authorsList.find(author => author.id === authorId)?.name)
        .filter(name => name !== undefined)
        .join(", ");
    return authorNames;
};
