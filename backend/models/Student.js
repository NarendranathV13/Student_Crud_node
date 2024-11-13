const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    mark: { type: Number, required: true }
});

module.exports = mongoose.model('Student', StudentSchema);
