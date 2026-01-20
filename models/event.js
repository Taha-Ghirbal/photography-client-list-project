const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  eventType: {
    type: String,
    required: true,
    enum: ["Wedding", "Portrait", "Event", "Product"],
  },
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
