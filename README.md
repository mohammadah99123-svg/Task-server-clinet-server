# Library Management System

## Project Overview

The Library Management System is a client-server application developed in C using TCP socket programming. The system allows users to manage library resources through a network connection. It provides functionalities such as viewing books, searching for books, borrowing and returning books, adding new books, and registering users.

The project follows the Client-Server Architecture where multiple clients can connect to a centralized server simultaneously. The server manages all library data and processes user requests securely using multithreading and synchronization mechanisms.

---

## Objectives

* Implement a distributed library management system.
* Practice TCP socket programming in C.
* Apply multithreading concepts using POSIX Threads.
* Manage shared resources safely using mutex locks.
* Simulate real-world library operations.

---

## Features

### Book Management

* View all available books.
* Search books by title or author.
* Add new books to the library.

### User Management

* Register new users.
* Assign unique user IDs.

### Borrowing System

* Borrow available books.
* Return borrowed books.
* Track book availability status.
* Record borrowing information.

### Client-Server Communication

* TCP-based communication.
* Real-time request and response handling.
* Support for multiple concurrent clients.

---

## System Architecture

### Server

The server is responsible for:

* Managing the library database.
* Handling client connections.
* Processing user requests.
* Maintaining book and user records.
* Synchronizing shared resources using mutexes.

### Client

The client provides a command-line interface that allows users to:

* Connect to the server.
* Browse books.
* Search books.
* Borrow and return books.
* Register as library members.
* Add new books.

---

## Technologies Used

* Programming Language: C
* Network Communication: TCP Sockets
* Multithreading: POSIX Threads (pthread)
* Synchronization: Mutex Locks
* Operating System: Linux / Unix

---

## Project Structure

```
LibraryManagementSystem/
│
├── server.c
├── client.c
└── README.md
```

---

## Available Commands

| Command  | Description                     |
| -------- | ------------------------------- |
| LIST     | Display all books               |
| SEARCH   | Search books by title or author |
| BORROW   | Borrow a book                   |
| RETURN   | Return a book                   |
| ADD_BOOK | Add a new book                  |
| REGISTER | Register a new user             |

---

## Compilation

Compile the server:

```bash
gcc server.c -o server -lpthread
```

Compile the client:

```bash
gcc client.c -o client
```

---

## Running the Application

Start the server:

```bash
./server
```

Open another terminal and start the client:

```bash
./client
```

---

## Sample Workflow

1. Start the server.
2. Connect a client.
3. List available books.
4. Register a user.
5. Borrow a book.
6. Return the book.
7. Add new books to the library.

---

## Future Improvements

* Database integration using MySQL or SQLite.
* User authentication and login system.
* Role-based access control.
* Book reservation system.
* Fine calculation for overdue books.
* Email notifications.
* Graphical User Interface.
* ISBN-based advanced searching.
* Reporting and statistics dashboard.

---

## Conclusion

This project demonstrates the implementation of a network-based Library Management System using Client-Server Architecture. It combines socket programming, multithreading, synchronization, and data management concepts to provide a practical example of distributed application development in C.
