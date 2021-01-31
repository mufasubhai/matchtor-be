const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  mentorId: {
    type: ObjectId,
    required: true
  },
  menteeId: {
    type: ObjectId,
    required: true
  },
  desription: {
    type: String,
    required: true
  },
  dueDate: {
    type: Date,
    required: true
  },
  createDate: {
      type: Date,
      required: true
  }
  completed: {
    type: Boolean,
    default: false,
    required: true
  }
}, {
  timestamps: true
})

module.exports = Task = mongoose.model('Task', TaskSchema);
