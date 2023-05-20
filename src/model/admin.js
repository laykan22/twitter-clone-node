const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const AdminSchema = new mongoose.Schema(
  {
    action: {
      type: String,
      required: true,
    },
    resource: {
      type: String,
      required: true,
    },
    modelId: {
      type: String,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

AdminSchema.plugin(mongoosePaginate);
const Admin = mongoose.model('Admin', AdminSchema);

module.exports = Admin;
