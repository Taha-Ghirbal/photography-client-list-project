const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  notes: {
    type: String,
  },
});

const Session = mongoose.model("Session", sessionSchema);

module.exports = Session;
