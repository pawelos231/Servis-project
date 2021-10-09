const mongoose = require("mongoose");
const { Schema } = mongoose;

const newsSchema = new Schema({
  title: { type: String, required: [true, "pole tytuł jest wymagane"] }, // String is shorthand for {type: String}
  description: { type: String, required: [true, "pole opis jest wymagane"] },
  date: { type: Date, default: Date.now },
});
module.exports = mongoose.model("News", newsSchema);
