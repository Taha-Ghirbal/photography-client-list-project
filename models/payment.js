const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true,
  },
  method: {
    type: String,
    required: true,
  },
  payStatus: {
    type: Boolean,
    required: true,
    enum: ["Payed", "Not Payed"],
  },
  
});

const Payment = mongoose.model("Payment", paymentSchema);

module.exports = Payment;
