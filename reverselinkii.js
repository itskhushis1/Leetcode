var reverseBetween = function(head, left, right) {
    if(head == null) {
        return null;
    }

    if(left == right) {
        return head;
    }

    let current = head, prev = null;

    while(left > 1) {
        prev = current;
        current = current.next;
        left--;
        right--;
    }

    let tailPrev = prev, tail = current, iterator = null;

    while(right > 0) {
        iterator = current.next;
        current.next = prev;
        prev = current;
        current = iterator;
        right--;
    }

    if(tailPrev != null) {
        tailPrev.next = prev;
    } else {
        head = prev;
    }

    tail.next = current;

    return head;
};
