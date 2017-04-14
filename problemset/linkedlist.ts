
export class LinkedList {
    value: number | string;
    next: LinkedList;

    constructor(val: number | string, next: LinkedList) {
        this.value = val;
        this.next = next;
    }
}
