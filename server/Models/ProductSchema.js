let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let ProductSchema = new Schema(
  {
    id: String,
    name: String,
    price: String,
    rating: String,
    category: String,
    img: String,
    tags: Array,
  },
  { timestamps: true }
);

const Product = mongoose.model("product", ProductSchema);

module.exports = Product;
