/* eslint-disable no-underscore-dangle */
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

type BookProperties = keyof Book;
type  PersonBook = Person & Book;
type BookOrUndefined = Book | undefined;

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

interface  Author extends Person {
    numBooksPublished: number;
}

interface  Librarian extends Person {
    department: string;
    assistCustomer: (custName: string, bookTitle: string) => void;
}

interface TOptions {
    duration?: number;
    speed?: number;
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

function getBookByID(id: Book['id']): BookOrUndefined {
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
/* export function assertRefBookInstance (condition: any): asserts condition {
    if(!condition) {
        throw Error( `It is not an instance of RefBook`)
    }
}

*/

function bookTitleTransform(title: any): string {
    assertStringValue(title);
    return [...title].reverse().join('');
}

function printBook(book: Book): void {
    console.log(`${book.title} + by
        ${book.author}`);
}

function getProperty(book: Book, prop: BookProperties): any {
    const value = book[prop];

    return typeof value === 'function' ? value.name: value;
}

function  getObjectProperty<TObject, TKey extends keyof TObject>(obj: TObject, prop: TKey): TObject[TKey] | string {
    const value = obj[prop];

    return typeof value === 'function' ? value.name: value;
}

function  setDefaultConfig(options: TOptions) {
    options.duration ??= 100;
    options.speed ??= 60;
    return options;
}
abstract class ReferenceItem {
    /* title: string;
    year: number;

    constructor(newTitle: string, newYear: number) {
        console.log('Creating a new ReferenceItem...');
        this.title = newTitle;
        this.year = newYear;
    } */

    #id: number;
    private _publisher: string;

    get publisher(): string {
        return this._publisher.toLocaleUpperCase();
    }

    set publisher(newPublisher: string) {
        this._publisher = newPublisher;
    }

    static department: string = 'Research Dep.';

    constructor(
        id: number,
        public title: string,
        protected year: number
    ) {
        console.log('Creating a new ReferenceItem...');
        this.#id = id;
    }
    printItem(): void {
        console.log(`${this.title} was published in ${this.year}`);
        console.log(ReferenceItem.department);
        console.log(Object.getPrototypeOf(this).consturctor.department);
    }

    getID(): number {
        return this.#id;
    }
    abstract printCitation(): void;
}

class Encyclopedia extends ReferenceItem {
    constructor (id: number,
        title: string,
        year: number,
        public edition: number) {
        super (id, title, year);
    }
    override printItem(): void {
        super.printItem();
        console.log(`Edition: ${this.edition} ${this.year}`);
    }
    printCitation(): void {
        console.log(`${this.year} ${this.edition}`);
    }
}

class UniversityLibrarian implements Librarian {
    name: string;
    email: string;
    department: string;
    assistCustomer(custName: string, bookTitle: string): void {
        console.log(`${this.name} is assisting
        ${custName} with book ${bookTitle}`);
    }
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
}; */
// console.log(printBook(myBook));
// myBook.markDamaged('missing back cover');
// =============================================================
// Task 04.02
// const logDamage: DamageLogger = (reason: string) => console.log( `Damaged: ${reason}`);
// logDamage('missing back cover');
// ===========================================================
// Task 04.03
/* const favouriteAuthor: Author = {
    name: 'Anna',
    email: 'anna@example.com',
    numBooksPublished: 2
};
const  favoriteLibrarian: Librarian = {
    name: 'Anna',
    email: 'anna@example.com',
    department: 'Classical',
    assistCustomer: null
}; */
// ========================================================
// Task 04.04
/* const offer: any = {
    book: {
        title: 'Essential TypeScript',
    },
}; */
// console.log(offer.magazine);
// console.log(offer.magazine.getTitle());
// console.log(offer.book.getTitle?.());
// console.log(offer.book.authors?.[0]);
// ===========================================================
// Task 04.05
// console.log(getProperty(myBook, 'title'));
// console.log(getProperty(myBook, 'markDamaged'));
// console.log(getProperty(myBook, 'isb'));
// ===========================================================
// Task 05.01
/* const ref = new ReferenceItem(1,'Learn Typescript', 2022);
console.log(ref);
ref.printItem();
ref.publisher = 'abc group';
console.log(ref.publisher);
console.log(ref.getID()); */
// ===========================================================
// Task 05.02, 05.03
// const refBook: Encyclopedia = new Encyclopedia(1,'Learn', 2020, 7);
// console.log(refBook);
// console.log(refBook.getID());
// refBook.printCitation();
// ============================================================
// Task 05.04
// const favoriteLibrarian: Librarian = new UniversityLibrarian();
// favoriteLibrarian.name = 'Anna';
// favoriteLibrarian.assistCustomer('Boris', 'Learn Typescript');
// ============================================================
// Task 05.05
/* const personBook: PersonBook = {
    name: 'Anna',
    author: 'Anna',
    available: false,
    category: Category.Angular,
    email: 'anna@gmail.com',
    id: 1,
    title: 'Unknown'
};

const options: TOptions = {duration: 20};
const options2 = setDefaultConfig(options);
console.log(options);
console.log(options2);
console.log(Object.is(options, options2)); */


// let instance;

/* const instance1 = new Counter();
// console.log(Counter.getInstance());
instance1.increase();
console.log(`in1 ${instance1.getState()}`); // 1;

const instance2 = new Counter();
console.log(`in2 ${instance2.getState()}`); // 1
instance2.increase();
instance2.increase();
console.log(`in1 ${instance1.getState()}`); // 2
console.log(`in2 ${instance2.getState()}`); // 2;
instance1.increase();
console.log(`in1 ${instance1.getState()}`); // 3;
console.log(`in2 ${instance2.getState()}`); // 3;

Counter.destroy();
console.log(`in1 ${instance1.getState()}`); // 0;
console.log(`in2 ${instance2.getState()}`); // 0;*/
// Generics
// T[] or Array<T>
/* function purge<T>(inventory: Array<T>): T[] {
    return inventory.slice(2);
}

const inventory: Book[] = [

    { id: 10, title: 'The C Programming Language', author: '???', available: true, category: Category.Software},

    { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },

    { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },

    { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }

];

const result = purge<string>(['123', '123', '245']);
console.log(result);

interface Magazine {
    title: string;
    publisher: string;
}

interface Shelfitem {
    title: string;

}

export default class Shelf<T extends Shelfitem> {
    private items: T[] = [];
    add(item: T): void {
        this.items.push(item);
    }

    getFirst() {
        return this.items[0];
    }
    find(title: string): T {
        return this.items.find((item: T) => item.title === title);
    }
    printTitle(): void {
        this.items.forEach(item => console.log(item.title));
    }
}

const  bookShelf = new Shelf<Book>();
inventory.forEach(book => bookShelf.add(book));
console.log(bookShelf.getFirst().title);

const magazines: Magazine[] = [
    { title: 'Programming Language Monthly', publisher: 'Code Mags' },
    { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
    { title: 'Five Points', publisher: 'GSU' }
];
const magazineShelf = new Shelf<Magazine>();
magazines.forEach(mag => magazineShelf.add(mag));
console.log(magazineShelf.getFirst().title);
magazineShelf.printTitle();
console.log(magazineShelf.find('Five Points'));

console.log(getObjectProperty(magazines[0], 'title'));
console.log(getObjectProperty(inventory[1], 'author'));
console.log(getObjectProperty<Book, 'author' | 'title'>(inventory[1], 'author'));
*/
/* export  class Shelf2 {
    private items: Book[] | Magazine[] = [];
    add(item: any): void {
        this.items.push(item);
    }

    getFirst() {
        return this.items[0];
    }
} */


