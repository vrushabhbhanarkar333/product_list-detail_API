# product_list-detail_API

This is an Express.js API that provides endpoints to retrieve product information from the item list.

## Prerequisites

- Node.js
- npm (Node Package Manager)

## Setup

1. Clone the repository:

   ```bash
   git clone <repository-url>

2. Install dependencies:

   ```bash
   npm install

3. Start the server:

   ```bash
   npm start
The server will start running on `http://localhost:3000`.


## Endpoints

1. Product List
   Returns a paginated list of products.

- Endpoint: /api/products/list
- Method: GET
- Parameters:
   - `size`: Number of items to include in each page (integer)
   - `page`: Offset for pagination (integer)
- Response: Returns a JSON array of products with the following fields:
   - `id`: Number
   - `item_name`: String
   - `item_image`: String
   - `item_price`: Number

2. Product Detail
   Returns the details of a specific product.

   - Endpoint: /api/products/:id
   - Method: GET
   - Parameter:
     - id: ID of the product to retrieve (integer)
   - Response: Returns a JSON object with the following fields:
     - id: Number
   - item_name: String
   - item_image: String
   - import_date: String (format: "YYYY-MM-DD")
   - expiration_date: String (format: "YYYY-MM-DD")
   - item_price: Number
   - item_quantity: Number
   - item_weight: Number
   - item_tax: Number
   - item_availability: Boolean

## License

This project is licensed under the [MIT License](https://opensource.org/license/mit/).