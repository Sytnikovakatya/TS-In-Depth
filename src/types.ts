import { getBooksByCategoryPromise } from './functions';
import { Book, Person } from './interfaces';

/* export type Book = {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
}; */

export type BookProperties = keyof Book;
export type PersonBook = Person & Book;
export type BookOrUndefined = Book | undefined;

export type Unpromisify<T> = T extends Promise<infer R> ? R : never;
export type UnArray<T> = T extends Array<infer R> ? R : never;
type pr = UnArray<Unpromisify<ReturnType<typeof getBooksByCategoryPromise>>>;
