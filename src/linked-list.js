const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) {
        let node = new Node(data);
        if (this.length == 0) {
            this._head = node;
            this._tail = node;
        } else {
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;
        }
        this.length++;
        return this;
    
    }

    head() {
        if (this.length == 0) return null;
        return this._head.data
    }

    tail() {
        if (this.length == 0) return null;
        return this._tail.data
    }

    at(index) {
        if(this.length) {
            let position = this._head;
            for (let i = 0; i<index; i++) {
                position = position.next
            }
            return position.data;
        }
    }

    insertAt(index, data) {
        let node = new Node(data);
        if(this.length) {
            let position = this._head;
            for (let i = 0; i<index; i++) {
                position = position.next
            }
            position.prev.next = node;
            node.prev = position.prev;
            node.next = position;
            position.prev = node;
        } else {
            this.append(data);
        }
        
        return this;
    }

    isEmpty() {
        return this.length == 0;
    }

    clear() {
        this.length = 0;
        this._head = null;
        this._tail = null;
        return this;
    }

    deleteAt(index) {
        if(this.length) {
            let position = this._head;
            for (let i = 0; i<index; i++) {
                position = position.next
            }
            if (position.prev) {
                position.prev.next = position.next;
            } else {
                this._head = position.next
            }
            if (position.next) {
                position.next.prev = position.prev;
            } else {
                this._tail = position.prev
            }
            
            
            position.next = null;
            position.prev = null;
        }
        return this;
    }

    reverse() {
        let tempHead = this._head;
        this._head = this._tail;
        this._tail = tempHead;
        let position = this._head;
        for (let i = 0; i<this.length; i++) {
            let tempPointer = position.next;
            position.next = position.prev;
            position.prev = tempPointer;
            position = position.next
        }
        return this;
    }

    indexOf(data) {
        let position = this._head;
        for (let i = 0; i<this.length; i++) {
            if(position.data == data) return i;
            position = position.next;
        }
        return -1;
    }

}

module.exports = LinkedList;
