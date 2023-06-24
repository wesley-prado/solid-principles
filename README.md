# Solid principles study project

This project is a Typescript e-commerce system that includes several classes for managing products, shopping carts, orders, customers, and discounts.

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
