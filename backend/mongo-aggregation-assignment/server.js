// server.js
const express = require("express");
const connectDB = require("./db");
const salesRoutes = require("./routes/sales");
const { Sale } = require("./model/sales.model");

const app = express();
// Sample data
const assignmentSalesData = [
  {
    date: new Date("2024-06-15T00:00:00Z"),
    store: "Store A",
    items: [
      { name: "item1", quantity: 5, price: 10.0 },
      { name: "item2", quantity: 3, price: 20.0 },
    ],
  },
  {
    date: new Date("2024-06-20T00:00:00Z"),
    store: "Store B",
    items: [
      { name: "item3", quantity: 2, price: 50.0 },
      { name: "item4", quantity: 4, price: 12.5 },
    ],
  },
];

connectDB().then(async () => {
  const count = await Sale.countDocuments();
  if (count === 0) {
    console.log("No sales data found. Inserting sample data...");
    await Sale.insertMany(assignmentSalesData);
    console.log("Sample data inserted.");
  } else {
    console.log("Sales collection already contains data.");
  }
});

app.use("/api/v1/sales", salesRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
