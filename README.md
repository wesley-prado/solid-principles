# Solid principles study project

This project is a basic Typescript e-commerce system that includes several classes for managing orders, like a shopping cart, a customer, and an order repository. The project was developed as a study of the SOLID principles of object-oriented design.

## Classes

The project includes the following classes:

- <span style="color:#FFD800">Product</span>: A class that represents a product, which includes an id, a name, and a price.
- <span style="color:#FFD800">ShoppingCart</span>: A class that manages a shopping cart, including methods for adding and removing items, calculating the total price, and applying discounts.
- <span style="color:#FFD800">Order</span>: A class that represents an order, which includes a shopping cart, a customer, and an order repository.
- <span style="color:#FFD800">Customer</span>: An abstract class that defines the interface for a customer.
- <span style="color:#FFD800">PhysicalPersonCustomer</span>: A concrete class that extends the Customer class and represents a physical person customer, which includes a first name, a last name, and a CPF (Brazilian tax ID) number.
- <span style="color:#FFD800">Discount</span>: An abstract class that defines the interface for a discount.
- <span style="color:#FFD800">TenPercentDiscount</span>: A concrete class that extends the Discount class and implements a 10% discount.
- <span style="color:#FFD800">OrderRepository</span>: A class that represents an order repository, which includes methods for saving and retrieving orders.

## Installation

To install the dependencies, run:

```
 npm i
```

## Usage

To execute the main file, run:

```
npx ts-node src/main.ts
```

This will run the main.ts file, which creates instances of the various classes and demonstrates their functionality.

## S.O.L.I.D

SOLID is an acronym that stands for five principles of object-oriented design: Single Responsibility Principle, Open/Closed Principle, Liskov Substitution Principle, Interface Segregation Principle, and Dependency Inversion Principle. These principles aim to make software designs more understandable, flexible, and maintainable. By following these principles, developers can create code that is easier to extend, test, and modify over time.

### Single Responsibility Principle

The Single Responsibility Principle states that a class should have only one reason to change. In other words, a class should have only one responsibility. If a class has more than one responsibility, it should be split into multiple classes, each with only one responsibility.

### Open/Closed Principle

The Open/Closed Principle states that software entities should be open for extension but closed for modification. In other words, classes should be designed in such a way that they can be extended to add new functionality without modifying the existing code.

### Liskov Substitution Principle

The Liskov Substitution Principle states that objects in a program should be replaceable with instances of their subtypes without altering the correctness of the program. In other words, a subclass should be able to replace its parent class without breaking the code that uses the parent class.

### Interface Segregation Principle

The Interface Segregation Principle states that clients should not be forced to depend on methods that they do not use. In other words, interfaces should be designed in such a way that they are specific to the needs of the clients that use them.

### Dependency Inversion Principle

The Dependency Inversion Principle states that high-level modules should not depend on low-level modules. Instead, both should depend on abstractions. In other words, classes should depend on abstractions, not on concrete implementations.
