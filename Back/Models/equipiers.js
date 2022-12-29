const mongoose = require("mongoose");

const equipiersShema = mongoose.Schema({
    name: { type: String, required: true },
});

module.exports = mongoose.model("equipiers", equipiersShema);
