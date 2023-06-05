require('dotenv').config();
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001;

// Middleware to parse JSON data
app.use(express.json());

// Routes
const productRoutes = require('./src/routes/productRoutes');
app.use('/api/products', productRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});