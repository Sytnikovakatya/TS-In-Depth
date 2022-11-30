/* eslint-disable no-redeclare */

showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

enum Category {
    Javascript,
    CSS,
    HTML,
    TypeScript,
    Angular,
}

/* type Book = {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
}; */

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

function getAllBooks(): readonly Book[] {
    const books = <const>[
        {
            id: 1,
            title: 'Refactoring JavaScript',
            category: Category.Javascript,
            author: 'Evan Burchard',
            available: true,
        },
        {
            id: 2,
            title: 'JavaScript Testing',
            category: Category.Javascript,
            author: 'Liang Yuxian Eugene',
            available: false,
        },
        { id: 3, title: 'CSS Secrets', category: Category.CSS, author: 'Lea Verou', available: true },
        {
            id: 4,
            title: 'Mastering JavaScript Object-Oriented Programming',
            category: Category.Javascript,
            author: 'Andrea Chiarelli',
            available: true,
        },
    ];
    return books;
}

function logFirstAvailable(books: readonly Book[] = getAllBooks()): void {
    console.log(`Number of books: ${books.length}`);
    const title = books.find(book => book.available)?.title;
    console.log(`First available book: ${title}`);
}

function getBookTitlesByCategory(inputCategory: Category =  Category.Javascript): string[] {
    const books = getAllBooks();
    return books.filter(books => books.category === inputCategory).map(({ title }) => title);
}

function logBookTitles(titles: Array<string>): void {
    titles.forEach(title => console.log(title));
}

function getBookAuthorByIndex(index: number): [title:string, author:string] {
    const books = getAllBooks();
    const { title, author } = books[index];
    return [title, author];
}

function calcTotalPages(): void {
    const data = <const>[
        { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
        { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
        { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 },
    ];
    const result = data.reduce((acc: bigint, obj) => {
        return acc + BigInt(obj.books) * BigInt(obj.avgPagesPerBook);
    }, 0n);
    console.log(result);
}

function createCustomerID (name: string, id: number): string {
    return `${name}/${id}`;
}

function  createCustomer(name: string, age?: number, city?: string): void {
    console.log(`Customer name: ${name}`);

    if(age) {
        console.log(`Customer age: ${age}`);
    }
    if(city) {
        console.log(`Customer city: ${city}`);
    }
}


function getBookByID(id: Book['id']): Book | undefined {
    const books = getAllBooks();
    return books.find(book => book.id === id);
}

function сheckoutBooks(customer: string, ...bookIDs: number[]): string[] {
    console.log(`Customer name: ${customer}`);
    return bookIDs.map(id => getBookByID(id)).filter(book => book.available).map(book => book.title);
}

function getTitles(author: string): string[];
function getTitles(available: boolean): string[];
function getTitles(id: number, available: boolean): string[];
function getTitles(...args: [string | boolean] | [number, boolean]): string[] {
    const books = getAllBooks();
    if (args.length === 1) {
        const [arg] = args;
        if (typeof arg === 'string') {
            return books.filter(book => book.author === arg).map(book => book.title);
        }else if(typeof arg === 'boolean') {
            return books.filter(book => book.available === arg).map(book => book.title);
        }
    } else if (args.length === 2) {
        const [id, available] = args;

        if(typeof id === 'number' && typeof available === 'boolean') {
            return books.filter(book => book.id === id && book.available === available).map(book => book.title);
        }
    }
}

function assertStringValue(data: any): asserts data is string {
    if (typeof data !== 'string') {
        throw new Error('value should have been a string');
    }
}

function bookTitleTransform(title: any): string {
    assertStringValue(title);
    return [...title].reverse().join('');
}

function printBook(book: Book): void {
    console.log(`${book.title} + by
        ${book.author}`);
}

// ==============================================================================
// Task 2.01
/* console.log(getAllBooks());
logFirstAvailable(getAllBooks());
logBookTitles(getBookTitlesByCategory(Category.CSS));
console.log(getBookAuthorByIndex(0));
calcTotalPages();

// ==============================================================================
// Task 03.01
const myID: string = createCustomerID('Ann', 10);
console.log(myID);
// let idGenerator: (name: string, id: number) => string;
let idGenerator: typeof createCustomerID;
idGenerator = (name: string, id: number) => `${name}/${id}`;
idGenerator = createCustomerID;
console.log(idGenerator('Boris', 20));

// ==========================================================
Task 03.02 */
// createCustomer('Karina');
// createCustomer('Maria', 20);
// createCustomer('Petro', 18, 'Kyiv');
// console.log(getBookTitlesByCategory(Category.CSS));
// logFirstAvailable();
// console.log(getBookByID(6));
// console.log(сheckoutBooks('Noname Customer', ...[1, 2,4]));
// const myBooks = сheckoutBooks('Ann', 1, 2, 4);
// console.log(myBooks);
// ==========================================================
// Task 03.03
// console.log(getTitles(1, true));
// console.log(getTitles(true));
// console.log(getTitles(2, false));
// console.log(getTitles('Andrea Chiarelli'));
// ============================================================
// Task 03.04
// console.log(bookTitleTransform('Learn Typescript'));
// console.log(bookTitleTransform('12345'));
// =============================================================
// Task 04.01
/* const myBook: Book = {
    id: 5,
    title: 'Colors, Backgrounds, and Gradients',
    author: 'Eric A. Meyer',
    available: true,
    category: Category.CSS,
    pages: 200,
    // markDamaged: (reason: string) => console.log( `Damaged: ${reason}`)
    markDamaged(reason: string) {
        console.log( `Damaged: ${reason}`);
    }
};
console.log(printBook(myBook));
myBook.markDamaged('missing back cover');*/
// =============================================================
// Task 04.02
const logDamage: DamageLogger = (reason: string) => console.log( `Damaged: ${reason}`);
logDamage('missing back cover');