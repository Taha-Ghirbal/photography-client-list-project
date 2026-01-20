const mongoose = require("mongoose");

const statusSchema = new mongoose.Schema({
  status: {
    type: String,
    required: true,
    enum: ["Upcoming", "Completed", "Cancelled"],
  },
});

const Status = mongoose.model("Status", statusSchema);

module.exports = Status;
