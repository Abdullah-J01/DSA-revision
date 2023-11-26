class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }

    printList() {
        let temp = this.head;
        while (temp !== null) {
            console.log(temp.value);
            temp = temp.next;
        }
    }

    getHead() {
        if (this.head === null) {
            console.log("Head: null");
        } else {
            console.log("Head: " + this.head.value);
        }
    }

    getTail() {
        if (this.tail === null) {
            console.log("Tail: null");
        } else {
            console.log("Tail: " + this.tail.value);
        }
    }

    getLength() {
        console.log("Length: " + this.length);
    }

    makeEmpty() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }

        this.length++;
        return this;
    }

    pop() {
        if (this.length === 0) return undefined;
        let temp = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
            this.length--;
            return temp
        }
        let before = this.tail.prev;
        before.next = null;
        temp.prev = null;
        this.tail = before;

        this.length--;
        return temp;
    }

    unshift(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    shift() {
        if (this.length === 0) return undefined;
        let temp = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
            temp.next = null;
        }
        this.length--;
        return temp;
    }

    get(index) {
        if (index < 0 || index >= this.length) return undefined;
        let temp = this.head;
        if (index < this.length / 2) {
            for (let i = 0; i < index; i++) {
                temp = temp.next;
            }
        } else {
            temp = this.tail;
            for (let i = this.length - 1; i > index; i--) {
                temp = temp.prev
            }
        }
        return temp;
    }

    set(index, value) {
        let temp = this.get(index);
        if (temp) {
            temp.value = value;
            return true;
        }
        return false;
    }

    insert(index, value) {
        if (index < 0 || index > this.length) return undefined;
        if (index === 0) {
            this.unshift(value);
        } else if (index === this.length) {
            this.push(value);
        } else {
            const newNode = new Node(value);
            let before = this.get(index - 1);
            let after = before.next;
            before.next = newNode;
            newNode.prev = before;
            after.prev = newNode;
            newNode.next = after;
            this.length++
        }
        return this;
    }

    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) {
            return this.shift();
        } else if (index === this.length - 1) {
            return this.pop();
        } else {
            let temp = this.get(index);
            temp.prev.next = temp.next;
            temp.next.prev = temp.prev;
            temp.next = null;
            temp.prev = null;
            this.length--;
            return temp;
        }
    }

    reverse() {
        if (this.length === 0) return undefined;
        let before = null;
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;
        let after = this.head.next;
        
        for (let i = 0; i < this.length; i++) {
            after = temp.next;
            temp.next = before;
            temp.prev = after;
            before = temp;
            temp = after;
        }
        return this;
    }

    // reverse() {
    //     let current = this.head;
    //     let temp = null;

    //     while (current !== null) {
    //         temp = current.prev;
    //         current.prev = current.next;
    //         current.next = temp;
    //         current = current.prev;
    //     }

    //     temp = this.head;
    //     this.head = this.tail;
    //     this.tail = temp;
    // }

    isPalindrome(){
        if(this.length <= 1) return true;
        let start = this.head;
        let end = this.tail;
        for (let i=0; i<this.length/2; i++){
            if(start.value !== end.value){
                return false;
            }
            start = start.next;
            end = end.prev;
        }
        return true;
    }

    swapPairs(){
        if(this.length <= 1) return;
        let current = this.head;
        let after = this.head.next;

        while(after){
            let temp = current.value;
            current.value = after.value;
            after.value = temp;

            current = after.next;
            after = current.next;
        }
    }


}



let myDLL = new DoublyLinkedList(0)
myDLL.push(1)
myDLL.push(2)
myDLL.push(3)

console.log("DLL before set():");
myDLL.printList();

myDLL.set(2, 99);

console.log("\nDLL after set():");
myDLL.printList();


/*
    EXPECTED OUTPUT:
    ----------------
    DLL before set():
    0
    1
    2
    3

    DLL after set():
    0
    1
    99
    3

*/
