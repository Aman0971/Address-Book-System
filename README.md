# Address-Book-System

A console-based Address Book application developed using **TypeScript** and **Object-Oriented Programming (OOP)** concepts. The project allows users to create and manage multiple address books, perform CRUD operations on contacts, search and sort contacts, prevent duplicate entries, and persist data using File I/O.

Each Use Case (UC) was implemented in a separate Git branch and then merged into the **main** branch following Git best practices.

---

## Technologies Used

- TypeScript
- Node.js
- Object-Oriented Programming (OOP)
- File System (File I/O)
- Git
- GitHub

---

## Features

- Create Contact
- Add New Contact
- Edit Existing Contact
- Delete Contact
- Manage Multiple Contacts
- Manage Multiple Address Books
- Prevent Duplicate Contacts
- Search Contacts by City or State
- View Contacts by City or State
- Count Contacts by City or State
- Sort Contacts by Name
- Sort Contacts by City, State, and Zip
- Store and Read Contacts using File I/O

---

## Project Structure

```
Address-Book-System
│
├── src/
│   ├── Contact.ts
│   ├── AddressBook.ts
│   ├── AddressBookMain.ts
│   └── ...
│
├── contacts.json
├── package.json
├── tsconfig.json
├── .gitignore
└── README.md
```

---

## Branch Structure

| Branch | Description |
|---------|-------------|
| main | Final merged project |
| uc1-create-contact | Create Contact Class |
| uc2-add-contact | Add Contact |
| uc3-edit-contact | Edit Contact |
| uc4-delete-contact | Delete Contact |
| uc5-multiple-contacts | Add Multiple Contacts |
| uc6-multiple-addressbook | Multiple Address Books |
| uc7-no-duplicate | Prevent Duplicate Contacts |
| uc8-search-person-city-state | Search by City or State |
| uc9-view-person-by-city-state | View Persons by City or State |
| uc10-count-by-city-state | Count Persons by City or State |
| uc11-sort-by-name | Sort Contacts by Name |
| uc12-sort-by-city-state-zip | Sort by City, State & Zip |
| uc13-file-io | File I/O Operations |

---

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/Aman0971/Address-Book-System.git
```

### Navigate to Project

```bash
cd Address-Book-System
```

### Install Dependencies

```bash
npm install
```

### Run the Project

```bash
npm start
```

or

```bash
npx ts-node src/AddressBookMain.ts
```

---

## Learning Outcomes

- TypeScript Fundamentals
- Classes and Objects
- Interfaces
- Encapsulation
- Abstraction
- Collections
- Exception Handling
- File Handling (File I/O)
- Git Branching Strategy
- GitHub Version Control

---

## Git Workflow

- Each Use Case was implemented in its own Git branch.
- Every branch contains the implementation of a single feature.
- After successful completion and testing, the feature branch was merged into the **main** branch.

---

## Author

**Aman Chaudhary**

GitHub: https://github.com/Aman0971
