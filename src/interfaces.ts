import { Category } from './enums';

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

interface Magazine {
    title: string;
    publisher: string;
}

interface Shelfitem {
    title: string;
}

interface LibMgrCallback {
    (err: Error | null, titles: string[] | null): void;
}

interface Callback<T> {
    (err: Error | null, data: T | null): void;
}

export {
    Book,
    Person,
    Author,
    Librarian,
    A,
    TOptions,
    Magazine,
    Shelfitem,
    DamageLogger as Logger,
    LibMgrCallback,
    Callback,
};
