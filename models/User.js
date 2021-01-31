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


    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    username = db.Column(db.String(15), unique=True, nullable = False)
    full_name = db.Column(db.String(128), nullable = False)
    password = db.Column(db.String(60), nullable=False)
    # otp_secret = db.Column(db.Integer, nullable=True)
    profile = db.relationship('MenteeProfiles', backref='author_of_profile', lazy=True)

class MenteeProfile(db.Model):
    __tablename__ = "MenteeProfiles"
    id = db.Column(db.Integer, primary_key=True, autoincrement = True)
    current_industry = db.Column(db.String(500), nullable = False)
    desired_field = db.Column(db.String(500), nullable = False)
    mentee_purpose = db.Column(db.String(500), nullable = False)
    secret_question = db.Column(db.String(500), nullable = False)
    mentee_id = db.Column(db.Integer, db.ForeignKey('Mentees.id'), nullable=False)

class Mentor(db.Model, UserMixin):
    __tablename__ = "Mentors"
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    username = db.Column(db.String(15), unique=True, nullable = False)
    full_name = db.Column(db.String(128), nullable = False)
    password = db.Column(db.String(60), nullable=False)
    # otp_secret = db.Column(db.Integer, nullable=True)
    profile = db.relationship('MentorProfiles', backref='author_of_profile', lazy=True)

class MentorProfile(db.Model):
    __tablename__ = "MentorProfiles"
    id = db.Column(db.Integer, primary_key=True, autoincrement = True)
    current_industry = db.Column(db.String(500), nullable = False)
    desired_field = db.Column(db.String(500), nullable = False)
    mentee_purpose = db.Column(db.String(500), nullable = False)
    secret_question = db.Column(db.String(500), nullable = False)
    mentor_id = db.Column(db.Integer, db.ForeignKey('Mentors.id'), nullable=False)