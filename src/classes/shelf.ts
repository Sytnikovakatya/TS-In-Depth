import { Book, Magazine, Shelfitem } from '../interfaces';

export default class Shelf<T extends Shelfitem> {
    private items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }

    getFirst(): T {
        return this.items[0];
    }

    find(title: string): T {
        return this.items.find((item: T) => item.title === title);
    }

    printTitles(): void {
        this.items.forEach(item => console.log(item.title));
    }
}

export class Shelf2 {
    private items: Book[] | Magazine[] = [];
    add(item: any): void {
        this.items.push(item);
    }

    getFirst(): any {
        return this.items[0];
    }
}
