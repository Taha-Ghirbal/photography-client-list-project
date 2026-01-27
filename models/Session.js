const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema({
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
    required: true,
  },
  status: {
    type: String,
    enum: ['Upcoming', 'Completed', 'Cancelled'],
    required: true,
  },
  paymentStatus: {
    type: String,
    enum: ['Payed', 'Not Payed'],
    required: true,
  },
});

const Session = mongoose.model("Session", sessionSchema);

module.exports = Session;
