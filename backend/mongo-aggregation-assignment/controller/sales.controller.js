const { Sale } = require("../model/sales.model");

exports.salesManager = async (req, res) => {
  try {
    // i have not work on aggregation pipe  much
    // for that i took help from chat gpt to write aggregation pipe
    const result = await Sale.aggregate([
      { $unwind: "$items" },
      {
        $addFields: {
          yearMonth: {
            $dateToString: { format: "%Y-%m", date: "$date" },
          },
          revenue: {
            $multiply: ["$items.quantity", "$items.price"],
          },
        },
      },
      {
        $group: {
          _id: {
            store: "$store",
            month: "$yearMonth",
          },
          totalRevenue: { $sum: "$revenue" },
          averagePrice: { $avg: "$items.price" },
        },
      },
      {
        $project: {
          _id: 0,
          store: "$_id.store",
          month: "$_id.month",
          totalRevenue: 1,
          averagePrice: 1,
        },
      },
      {
        $sort: {
          store: 1,
          month: 1,
        },
      },
    ]);

    res.json(result);
  } catch (err) {
    console.error("Aggregation Error:", err.message);
    res.status(500).send("Server Error");
  }
};
