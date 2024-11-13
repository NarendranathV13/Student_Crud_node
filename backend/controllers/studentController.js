const Student = require('../models/Student');


exports.addStudent = async (req, res) => {
    try {
        const { name, email, mark } = req.body;
        const student = new Student({ name, email, mark });
        await student.save();
        res.status(201).json(student);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all students
exports.getAllStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete student by ID
exports.deleteStudent = async (req, res) => {
    try {
        const { id } = req.params;
        await Student.findByIdAndDelete(id);
        res.status(200).json({ message: 'Student deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update student by ID
exports.updateStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, mark } = req.body;
        const updatedStudent = await Student.findByIdAndUpdate(id, { name, email, mark }, { new: true });
        res.status(200).json(updatedStudent);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};