# Gourmet Haven Restaurant Server

This repository contains the backend code for the **Gourmet Haven Restaurant** web application, a fully-featured restaurant platform with functionality for order management, payment processing, user administration, and analytics.

- **Live Site**: [Gourmet Haven Restaurant](https://gourment-haven-restaurant.web.app)
- **Tech Stack**: Node.js, Express.js, MongoDB, Stripe

## Features

1. **Menu Management**: View, add, edit, and delete menu items.
2. **Order Processing**: Supports customer orders with payment integration.
3. **User Administration**: Role-based access control (Admin/User).
4. **Analytics**: Dashboard for revenue, orders, and user statistics.

## Table of Contents

- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

---

## Installation

1. Clone this repository:
    ```bash
    git clone https://github.com/your-username/gourmet-haven-server.git
    ```

2. Navigate into the project directory:
    ```bash
    cd gourmet-haven-server
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Start the server:
    ```bash
    npm start
    ```

## Environment Variables

Create a `.env` file in the root directory and add the following environment variables:

```plaintext
PORT=5000
DB_USER=<Your MongoDB Username>
DB_PASSWORD=<Your MongoDB Password>
JWT_ACCESS_TOKEN=<Your JWT Secret Key>
STRIPE_PAYMENT_SECRET=<Your Stripe Secret Key>
