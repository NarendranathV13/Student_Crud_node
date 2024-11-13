const express = require('express');
const router = express.Router();
const { addStudent, getAllStudents, deleteStudent, updateStudent } = require('../controllers/studentController');

router.post('/students', addStudent);      // POST: Add a new student
router.get('/students', getAllStudents);   // GET: Fetch all students
router.delete('/students/:id', deleteStudent);    // DELETE route
router.put('/students/:id', updateStudent);    

module.exports = router;
