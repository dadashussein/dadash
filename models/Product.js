const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,
    price: { type: Number, required: true },
    images: [{ type: String }],
    category: { type: mongoose.Types.ObjectId, ref: 'Category' },
    properties: { type: Object },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;