/**
 * Represents a Node in a linked list.
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
        this.newNode = new Node(value);
        this.head = this.newNode;
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
}

/**
 * Test the LinkedList class (constructor).
 */
function test() {
    let myLinkedList = new LinkedList(4);

    myLinkedList.getHead();
    myLinkedList.getTail();
    myLinkedList.getLength();
    console.log("\nLinked List:");
    myLinkedList.printList();
}

test();

/*
    EXPECTED OUTPUT:
    ----------------
    Head: 4
    Tail: 4
    Length: 1
    
    Linked List:
    4

*/