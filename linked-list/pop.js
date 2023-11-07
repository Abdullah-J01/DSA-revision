/**
 * Represents a Node in a singly linked list.
 */
class Node {
    /**
     * Create a new Node with the given value.
     * @param {any} value - The value to store in the Node.
     */
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

/**
 * Represents a singly linked list.
 */
class LinkedList {
    /**
     * Create a new LinkedList with an initial value.
     * @param {any} value - The initial value for the linked list.
     */
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }

    /**
     * Print the elements of the linked list.
     */
    printList() {
        let temp = this.head;
        while (temp !== null) {
            console.log(temp.value);
            temp = temp.next;
        }
    }

    /**
     * Get the value of the head of the linked list.
     */
    getHead() {
        if (this.head === null) {
            console.log("Head: null");
        } else {
            console.log("Head: " + this.head.value);
        }
    }

    /**
     * Get the value of the tail of the linked list.
     */
    getTail() {
        if (this.tail === null) {
            console.log("Tail: null");
        } else {
            console.log("Tail: " + this.tail.value);
        }
    }

    /**
     * Get the length of the linked list.
     */
    getLength() {
        console.log("Length: " + this.length);
    }

    /**
     * Make the linked list empty by resetting head, tail, and length.
     */
    makeEmpty() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    /**
     * Add a new node with the given value to the end of the linked list.
     * @param {any} value - The value to be added to the linked list.
     * @returns {LinkedList} - The modified linked list.
     */
    push(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    /**
     * Remove and return the last node from the linked list.
     * @returns {Node|undefined} - The removed node, or undefined if the list is empty.
     */
    pop() {
        if (!this.head) {
            return undefined;
        }
        let temp = this.head;
        let pre = this.head;

        while (temp.next) {
            pre = temp;
            temp = temp.next;
        }
        this.tail = pre;
        this.tail.next = null;

        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return temp;
    }
}

/**
 * Test the LinkedList class.
 */
function test() {
    let myLinkedList = new LinkedList(1);
    myLinkedList.push(2);

    if (myLinkedList.length !== 0) {
        console.log(myLinkedList.pop().value);
    } else {
        console.log("null");
    }

    if (myLinkedList.length !== 0) {
        console.log(myLinkedList.pop().value);
    } else {
        console.log("null");
    }

    if (myLinkedList.length !== 0) {
        console.log(myLinkedList.pop().value);
    } else {
        console.log("null");
    }
}

test();

/*
    EXPECTED OUTPUT:
    ----------------
    2
    1
    null

*/