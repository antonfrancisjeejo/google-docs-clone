const mongoose = require("mongoose");

const Document = mongoose.model("documents", {
  _id: String,
  data: Object,
});

module.exports = Document;
