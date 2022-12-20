import { Category } from './enum';

interface Book {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
    pages?: number;
    // markDamaged?:(reason: string) => void;
    // markDamaged?(reason: string): void;
    markDamaged?: DamageLogger;
}

interface DamageLogger {
    (parametr: string): void;
}

interface Person {
    name: string;
    email: string;
}

interface Author extends Person {
    numBooksPublished: number;
}

interface Librarian extends Person {
    department: string;
    assistCustomer: (custName: string, bookTitle: string) => void;
}

interface A {
    [prop: string]: string | number;
}

interface TOptions {
    duration?: number;
    speed?: number;
}

export { Book, Person, Author, Librarian, A, TOptions, DamageLogger as Logger };
