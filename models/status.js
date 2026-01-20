const mongoose = require("mongoose");

const statusSchema = new mongoose.Schema({
  status: {
    type: String,
    required: true,
    enum: ["Upcoming", "Completed", "Cancelled"],
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
