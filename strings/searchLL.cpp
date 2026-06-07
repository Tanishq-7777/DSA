#include <iostream>
using namespace std;

// Node structure
struct Node {
    int data;
    Node* next;
};

// Function to create linked list from 1 to 10
Node* createLinkedList() {
    Node* head = nullptr;
    Node* tail = nullptr;

    for (int i = 1; i <= 10; i++) {
        Node* newNode = new Node();
        newNode->data = i;
        newNode->next = nullptr;

        if (head == nullptr) {
            head = newNode;   // first node
            tail = newNode;
        } else {
            tail->next = newNode; // link new node
            tail = newNode;       // move tail forward
        }
    }
    return head;
}

// Function to print linked list
void printList(Node* head) {
    Node* temp = head;
    while (temp != nullptr) {
        cout << temp->data << " -> ";
        temp = temp->next;
    }
    cout << "NULL" << endl;
}
//search on LL
Node* searchLinkedList(Node* head,int element){
    if(head == nullptr) return head;
    if(head->data == element) return head;
    return searchLinkedList(head->next,element);
}

int main() {
    Node* head = createLinkedList();
    printList(head);

    Node* curr = searchLinkedList(head, 5);
    if (curr != nullptr)
        cout << "Element found: " << curr->data << endl;
    else
        cout << "Element not found!" << endl;

    return 0;
}
