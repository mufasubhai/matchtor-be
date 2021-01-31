const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UnmatchSchema = new Schema({

        mentorId: {
        type: ObjectId,
        required: true
    },
        menteeId: {
        type: ObjectId,
        required: true
    },
        initiator: {
        type: String,
        required: true
    },
        reason: {
        type: String,
        required: true
    }
 
}, {
  timestamps: true
})

module.exports = Unmatch = mongoose.model('Unmatch', UnmatchSchema);
