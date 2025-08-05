const mongoose = require("mongoose");
const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
});

const saleSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  store: { type: String, required: true },
  items: [itemSchema],
});

const Sale = mongoose.model("Sale", saleSchema);
module.exports = { Sale };
