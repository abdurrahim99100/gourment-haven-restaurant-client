# Gourmet Haven Restaurant 🍲

Welcome to **Gourmet Haven Restaurant**! This project is a complete online restaurant platform that allows customers to view menu items, place orders, and make payments seamlessly. Administrators can manage the menu, monitor orders, and analyze revenue directly from the dashboard.

### 🌐 [Live Site](https://gourment-haven-restaurant.web.app) | [Client Repository](https://github.com/abdurrahim99100/gourment-haven-restaurant-client/tree/main) | [Server Repository](https://github.com/abdurrahim99100/gourment-haven-restaurant-server)

---

## 🚀 Features

### For Customers
- **Order Menu**: Browse through a comprehensive menu and add items to your cart for ordering.
- **Payment Processing**: Secure payment options for a smooth and reliable checkout experience.
- **View Menu**: Explore detailed descriptions and prices for each item.
- **Cart Management**: Effortlessly add or remove items from the cart before ordering.
- **Order History**: View previous orders and payment history.

### For Administrators
- **User Management**: View and manage all users, including access control for admin privileges.
- **Menu Management**: Create, update, and delete menu items directly from the admin dashboard.
- **Order & Revenue Analytics**: Access detailed insights on total users, orders, menu items, and revenue.
- **Payment Management**: View and confirm successful payments to keep track of completed orders.
- **Category-based Sales Analytics**: Breakdown of orders and revenue by category to help target popular items.

## 🛠️ Technology Stack

- **Frontend**: React, React Router, and Tailwind CSS
- **Backend**: Express.js, Node.js, MongoDB, JWT Authentication, Stripe for payment processing
- **Additional Libraries**: Axios, dotenv, jsonwebtoken, and cors
- **Hosting**: Firebase (Frontend), Vercel (Backend)

---

## 📋 API Endpoints

### Authentication
- **`POST /jwt`**: Generates a JWT token for secure access.
- **Token Verification Middleware**: Authenticates requests with JWT, ensuring secure routes for specific users.

### Users
- **`GET /users`**: Fetch all users (Admin access only).
- **`POST /users`**: Register a new user.
- **`PATCH /users/admin/:id`**: Promote a user to admin (Admin access only).
- **`DELETE /users/:id`**: Delete a user by ID (Admin access only).
  
### Menu
- **`GET /menu`**: Retrieve all menu items.
- **`POST /menu`**: Add a new menu item (Admin access only).
- **`PATCH /menu/:id`**: Update menu item details (Admin access only).
- **`DELETE /menu/:id`**: Delete a menu item by ID (Admin access only).

### Orders and Cart
- **`POST /carts`**: Add an item to the cart.
- **`GET /carts`**: Retrieve all items in the cart (based on user email).
- **`DELETE /carts/:id`**: Remove an item from the cart.

### Payments
- **`POST /create-payment-intent`**: Generate Stripe payment intent.
- **`POST /payment`**: Record successful payments and clear corresponding cart items.
- **`GET /payments/:email`**: Fetch payment history for a user.

### Analytics (Admin Access Only)
- **`GET /admin-stats`**: Provides data on total users, menu items, orders, and revenue.
- **`GET /order-stats`**: Retrieves category-based sales data for performance insights.

---

## 💾 Installation and Setup

1. **Clone the Repositories**:

   ```bash
   git clone https://github.com/abdurrahim99100/gourment-haven-restaurant-client.git
   cd gourment-haven-restaurant-client
   npm install
   npm start
