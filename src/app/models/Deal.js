const mongoose = require('mongoose');

const DealSchema = new mongoose.Schema(
  {
    valor_total: {
      type: Number,
      required: true,
      trim: true,
    },
    data: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Deal', DealSchema);
