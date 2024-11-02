# Gourmet Haven Restaurant

**Live Site**: [Gourmet Haven Restaurant](https://gourment-haven-restaurant.web.app)

**Repository**: [GitHub](https://github.com/abdurrahim99100/gourment-haven-restaurant-client/tree/main)

## Overview

Gourmet Haven Restaurant is a full-stack restaurant application where users can view menu items, place orders, and securely complete payments. The project includes both client and server functionality, offering an integrated experience with user-friendly order processing, admin management, and robust payment handling.

## Key Features

### User-Side Features
- **Order Menu**: Browse and select items from a diverse menu.
- **Cart Management**: Add and manage items in the cart for convenient checkout.
- **Secure Payment**: Use Stripe for secure payment processing with real-time transaction tracking.
- **Review & Rating**: Provide feedback and reviews for menu items.
- **Order History**: View past orders and payment details.

### Admin-Side Features
- **Admin Panel**: Manage users, menu items, orders, and revenue analytics.
- **Menu Management**: Add, update, and delete menu items with real-time updates.
- **User Management**: Assign roles (e.g., Admin) to users for access control.
- **Order Analytics**: View order statistics, revenue totals, and other insights via an aggregated dashboard.
- **JWT Security**: Token-based authentication for secure, role-based access.

## Technologies Used
- **Frontend**: React.js, Tailwind CSS, React Query, React Router
- **Backend**: Express.js, MongoDB, Node.js
- **Authentication**: JSON Web Token (JWT)
- **Payment Processing**: Stripe API
- **Deployment**: Vercel (Server), Firebase Hosting (Client)

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/abdurrahim99100/gourment-haven-restaurant-client.git
    cd gourment-haven-restaurant-client
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables:
    - Create a `.env` file in the root directory and add your MongoDB URI, Stripe API key, and JWT secret key:
        ```plaintext
        REACT_APP_STRIPE_PAYMENT_SECRET=<your_stripe_secret_key>
        REACT_APP_DB_USER=<your_mongodb_username>
        REACT_APP_DB_PASSWORD=<your_mongodb_password>
        JWT_ACCESS_TOKEN=<your_jwt_secret_key>
        ```

4. Start the development server:
    ```bash
    npm start
    ```

## API Routes

### Authentication
- **`POST /jwt`**: Generates a JWT token for user authentication.
  
### User Management
- **`POST /users`**: Add a new user.
- **`GET /users`**: List all users (Admin only).
- **`PATCH /users/admin/:id`**: Assign "admin" role to a user.
- **`DELETE /users/:id`**: Remove a user (Admin only).

### Menu Management
- **`GET /menu`**: Retrieve all menu items.
- **`POST /menu`**: Add a new menu item (Admin only).
- **`PATCH /menu/:id`**: Update an existing menu item (Admin only).
- **`DELETE /menu/:id`**: Delete a menu item (Admin only).

### Cart Management
- **`POST /carts`**: Add an item to the cart.
- **`GET /carts`**: View cart items for a specific user.
- **`DELETE /carts/:id`**: Remove an item from the cart.

### Payments
- **`POST /create-payment-intent`**: Initialize a Stripe payment.
- **`POST /payment`**: Save payment details and clear cart after payment.
- **`GET /payments/:email`**: Get payment history for a user.

### Analytics
- **`GET /admin-stats`**: Retrieve statistics on users, orders, revenue (Admin only).
- **`GET /order-stats`**: Get order data based on categories (Admin only).

## Deployment

1. **Frontend**: Deployed using Firebase Hosting.
2. **Backend**: Hosted on Vercel for seamless serverless deployment.

## License
This project is licensed under the MIT License.
