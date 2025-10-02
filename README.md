# Inventory Management System

## Project Description
A simple backend system to manage inventory items using Express.js and JavaScript arrays.

##  How to Run
1. Download all files to a folder
2. Open terminal in that folder
3. Run: `node index.js`
4. Server starts on: `http://localhost:3000`

##  Available Routes

### Basic Routes
- `GET /` - Check if server is working
- `GET /health` - Check server health

### Inventory Routes
- `GET /inventory` - Get all items
- `GET /inventory/id/1` - Get item with ID 1
- `GET /inventory/category/Electronics` - Get Electronics items
- `POST /inventory` - Add new item
- `PUT /inventory/1` - Update item with ID 1
- `DELETE /inventory/1` - Delete item with ID 1

##  How to Test with Postman

### 1. Get All Items
- Method: `GET`
- URL: `http://localhost:3000/inventory`

### 2. Get Single Item
- Method: `GET` 
- URL: `http://localhost:3000/inventory/id/1`

### 3. Add New Item
- Method: `POST`
- URL: `http://localhost:3000/inventory`
- Body (JSON):
  json
{
  "id": 7,
  "name": "Toy Store",
  "category": "Toys",
  "totalItems": 50,
  "totalQuantity": 200,
  "totalValue": 5000
}
  

### 4. Update Item
- Method: `PUT`
- URL: `http://localhost:3000/inventory/1`
- Body (JSON):
json
{
  "name": "New Store Name",
  "totalItems": 100
}

##  Sample Data
The system starts with 6 sample items:
- Electronics Store
- Book Haven  
- Fashion Hub
- Fresh Mart
- Sports Gear
- Home Comfort

##  Notes
- Data is stored in memory (resets when server restarts)
- No database setup required
- Perfect for learning backend basics

##  Assignment Requirements Completed
-  Express server on port 3000
-  GET / and GET /health routes
-  Logging middleware
-  404 error handling
-  POST and GET operations
-  Postman testing ready
