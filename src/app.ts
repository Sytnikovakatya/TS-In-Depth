import { ReferenceItem, UL, RefBook, Shelf } from './classes';
import { Book, Librarian, Logger, TOptions, Magazine } from './interfaces';
import { Category } from './enums';
import { Library } from './classes/library';
import {
    purge,
    printRefBook,
    calcTotalPages,
    getBookAuthorByIndex,
    getBookByID,
    getBookTitlesByCategory,
    getAllBooks,
    getObjectProperty,
    getBooksByCategoryPromise,
    getTitles,
    logSearchResults,
    getBooksByCategory,
    logCategorySearch,
    createCustomer,
} from './functions';
import { BookRequiredFields, CreateCustomerFunctionType, UpdatedBook } from './types';

showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
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
// const logDamage: Logger = (reason: string) => console.log(`Damaged: ${reason}`);
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
// const refBook: RefBook = new RefBook(1, 'Learn', 2020, 7);
// console.log(refBook);
// console.log(refBook.getID());
// refBook.printCitation();
// ============================================================
// Task 05.04
// const favoriteLibrarian: Librarian = new UL.UniversityLibrarian();
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

// Task 06.03, 06.04
/* const refBook: RefBook = new RefBook(1, 'Learn Typescript', 2022, 2);
printRefBook(refBook);

const favoriteLibrarian: Librarian = new UL.UniversityLibrarian();
printRefBook(favoriteLibrarian); */

// Task 06.05
// const flag = false;

/* if (flag) {
    import('./classes')
        .then(o => {
            const reader = new o.Reader();
            reader.name = 'Anna';
            reader.take(getAllBooks()[0]);

            console.log(reader);
        })
        .catch(err => console.log(err))
        .finally(() => console.log('Complete!'));
} */
/* if (flag) {
    const o = await import('./classes');
    const reader = new o.Reader();
    reader.name = 'Anna';
    reader.take(getAllBooks()[0]);

    console.log(reader);
} */

// Task 06.06
// let library: Library = new Library();
/* let library: Library = {
    id: 1,
    name: 'Oleg',
    address: 'Kyiv',
};
*/
// Task 07.01

/* const inventory: Book[] = [
    { id: 10, title: 'The C Programming Language', author: '???', available: true, category: Category.Software },

    { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },

    { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },

    { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software },
];
*/
// const result1 = purge<Book>(inventory);
// console.log(result1);

// const result2 = purge([1, 2, 3, 4, 5]);
// console.log(result2);

// Task 07.02
/* const bookShelf = new Shelf<Book>();
inventory.forEach(book => bookShelf.add(book)); */
// console.log(bookShelf.getFirst().title);
// console.log(bookShelf.getFirst().category);

/* const magazines: Magazine[] = [
    { title: 'Programming Language Monthly', publisher: 'Code Mags' },
    { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
    { title: 'Five Points', publisher: 'GSU' },
];

const magazineShelf = new Shelf<Magazine>();
magazines.forEach(mag => magazineShelf.add(mag)); */
// console.log(magazineShelf.getFirst().title);

// Task 07.03
// magazineShelf.printTitles();
// console.log(magazineShelf.find('Five Points'));

// console.log(getObjectProperty(magazines[0], 'title'));
// console.log(getObjectProperty(inventory[1], 'author'));
// console.log(getObjectProperty<Book, 'author' | 'title'>(inventory[1], 'author'));

// 07.04
/* const bookRequiredFields: BookRequiredFields = {
    author: 'Anna',
    available: false,
    category: Category.Angular,
    id: 1,
    markDamaged: null,
    pages: 200,
    title: 'Learn Angular',
};

const updatedBook: UpdatedBook = {
    author: 'Anna',
    available: false,
    category: Category.Angular,
    id: 1,
};

let params: Parameters<CreateCustomerFunctionType>;
params = ['Anna', 30, 'Kyiv'];
createCustomer(...params); */

// 07.05

// Task 08.04
// const refBook: refBook= new RefBook(1, 'Learn Typescript', 2022, 2);
// refBook.printItem();

// Task 08.05
// const favoriteLibrarian = new UL.University.librarian();
// console.log(favoriteLibrarian);
// favoriteLibrarian.name = 'Anna';
// favouriteLibrarian.assistCustomer('Boris', 'Learn TypeScript');

// Task 09.01
// console.log('Begin');
// getBooksByCategory(Category.Javascript, logCategorySearch);
// getBooksByCategory(Category.Software, logCategorySearch);
// console.log('End');
// Task 09.02
/* console.log('Begin');
getBooksByCategoryPromise(Category.Javascript)
    .then(titles => {
        console.log(titles);
        return Promise.resolve(titles.length);
    })
    .then(n => console.log(n))
    .catch(reason => console.log(reason));

getBooksByCategoryPromise(Category.Software)
    .then(titles => console.log(titles))
    .catch(reason => console.log(reason));
console.log('End'); */

// Task 09.03
// console.log('Begin!');
// logSearchResults(Category.Javascript);
// logSearchResults(Category.Software).catch(err => console.log(err));
// console.log('End!');
