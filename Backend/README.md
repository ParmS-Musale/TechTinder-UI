# Node.js Notes

## Session 1: Node.js Introduction and Basics

### **What is Node.js?**

Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It is designed to build scalable network applications. Key features:

- **Non-blocking I/O**: Handles multiple requests efficiently.
- **Event-driven**: Uses event loop for concurrency.
- **Single-threaded**: Unlike traditional multithreaded systems.

### **What is a Database?**

A database is an organized collection of data stored electronically for efficient access, management, and updating.

### **Difference Between RAM and ROM**

- **RAM** (Random Access Memory): Temporary, volatile memory used for active processes.
- **ROM** (Read-Only Memory): Non-volatile, permanent memory storing firmware.

---

## History and Evolution

### **History of RDBMS**

- 1970s: Introduction of the relational model by E.F. Codd at IBM.
- 1980s: Rise of commercial systems like Oracle, SQL Server, and DB2.
- Focused on structured, tabular data with ACID compliance.

### **History of NoSQL**

- 2000s: Emerged with the need to handle unstructured data and scalability.
- Examples: MongoDB, Cassandra, DynamoDB.
- Prioritizes performance and flexibility over strict schema.

---

## MongoDB Connection Issues

### **Common Errors**

- **Invalid connection string**: Ensure it starts with `mongodb://` or `mongodb+srv://`.
- **Authentication failed**: Check credentials (username/password).
- **Not authorized on admin**: User does not have required permissions for the database.

**Solution:**
Verify your credentials, permissions, and the structure of your connection string.

### **Sample Connection String**

```plaintext
mongodb+srv://username:password@cluster.mongodb.net/database?retryWrites=true&w=majority
```

---

## Programming Concepts in Node.js

### **Difference Between Monolith and Microservices**

| Feature      | Monolith                | Microservices                     |
| ------------ | ----------------------- | --------------------------------- |
| Architecture | Single unified codebase | Divided into independent services |
| Scalability  | Vertical                | Horizontal                        |
| Deployment   | Entire application      | Service-by-service                |

### **What is REST API?**

Representational State Transfer (REST) is an architectural style for designing networked applications. Key principles:

- Stateless communication
- Use of HTTP methods
- Resource representation (JSON/XML)

### **HTTP Methods**

- **GET**: Retrieve data.
- **POST**: Submit data.
- **PUT**: Update data.
- **DELETE**: Remove data.

---

## Package Management in Node.js

### **Caret (****`^`****) vs Tilde (****`~`****)**

- **Caret (****`^`****)**: Updates to the latest minor version.
- **Tilde (****`~`****)**: Updates to the latest patch version.

### **Middleware in Express.js**

Middleware functions are executed in the request-response cycle. Uses:

- Logging
- Authentication
- Data parsing

### **Difference Between ****`app.use`**** and ****`app.all`**

| Feature | `app.use`                            | `app.all`               |
| ------- | ------------------------------------ | ----------------------- |
| Purpose | Middleware for all requests          | Handle all HTTP methods |
| Usage   | Pre-process requests (e.g., logging) | Handle specific routes  |

---

## JSON vs JavaScript Object

| Feature | JavaScript Object                     | JSON                          |
| ------- | ------------------------------------- | ----------------------------- |
| Syntax  | Flexible (functions, symbols allowed) | Strict (only key-value pairs) |
| Usage   | Runtime, dynamic                      | Data exchange format          |

---

## Import and Export in Node.js

### **Why Important?**

- Code reusability
- Modularity
- Dependency management

### **Syntax**

#### CommonJS:

```javascript
// Exporting
module.exports = { func1, func2 };

// Importing
const { func1, func2 } = require('./module');
```

#### ES Modules:

```javascript
// Exporting
export const func1 = () => {};

// Importing
import { func1 } from './module.js';
```

---

### Express.js Request Handling

Express.js uses a middleware stack to process requests. When a request is received:

1. Middleware functions execute sequentially.
2. Routes match the request URL and HTTP method.
3. Response is sent back to the client.

---

## Notes End

i want to post on github so i need redeme file

