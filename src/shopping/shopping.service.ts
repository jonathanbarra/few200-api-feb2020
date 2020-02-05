import { Injectable } from '@nestjs/common';
import { ShoppingItem } from './models';

@Injectable()
export class ShoppingService {
    private items: ShoppingItem[] = [
        { id: 1, description: 'Hair Spray', purchased: false },
        { id: 2, description: 'Incense', purchased: false },
        { id: 3, description: 'Oranges', purchased: true },
    ];
    private currentId = 4;

    getAll() {
        return new Promise((resolve) => {
            setTimeout(() => resolve(this.items), 2000);
        });
    }

    add(description: string) {
        const newItem = { id: this.currentId++, description, purchased: false };
        this.items.push(newItem);
        return newItem;
    }

    markPurchased(item: ShoppingItem) {
        const storedItem = this.items.filter(i => i.id === item.id)[0];
        storedItem.purchased = true;
        return storedItem;
    }
}
