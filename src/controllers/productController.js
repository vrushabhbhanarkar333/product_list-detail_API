const productList = require('../data/item_list.json');


// Product List API
exports.getProductList = (req, res) => {
  try {
    const { size, page } = req.query;
    const startIndex = (page - 1) * size;
    const endIndex = startIndex + parseInt(size);
    const paginatedList = productList
      .slice(startIndex, endIndex)
      .map(({ id, item_name, item_image, item_price }) => ({
        id,
        item_name,
        item_image,
        item_price
      }));

    res.json(paginatedList);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
};


// Product Detail API
exports.getProductDetail = (req, res) => {
  try {
    const { id } = req.params;
    const product = productList.find(item => item.id === parseInt(id));
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ error: 'Product not found' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
