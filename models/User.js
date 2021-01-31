const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({

        email: {
        type: String,
        required: true
    },
        fullName: {
        type: String,
        required: true
    },
        password: {
        type: String,
        required: true
    },
        aboutMe: {
        type: String,
        required: true
    },
        company: {
        type: String,
        required: false
    },
        linkedIn: {
        type: String,
        required: true
    },
        userType: {
        type: String,
        required: true,
    },
        careerSwitch: {
        type: Boolean,
        required: true
    },
        desiredField: {
        type: String,
        required: true
    },
        currentField: {
        type: String,
        required: true
    },
   
        mentorOffers: {
        type: Array,
        default: [],
        required: true,
    },
        menteeGoals: {
        type: Array,
        default: [],
        required: true,
    },
        mentors: {
        type: Array,
        default: [],
        required: true,
    },
        mentees: {
        type: Array,
        default: [],
        required: true,
    },
        currentMentorTasks: {
        type: Array,
        default: [],
        required: true,
    },
        currentMenteeTasks: {
        type: Array,
        default: [],
        required: true,
    },
        pastMentorTasks: {
        type: Array,
        default: [],
        required: true,
    },
        pastMenteeTasks: {
        type: Array,
        default: [],
        required: true,
    },
}, {
  timestamps: true
})

module.exports = User = mongoose.model('User', UserSchema);


