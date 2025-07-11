const express = require('express');
const router = express.Router();
const StudentController = require('../controllers/StudentController');

router.get('/', (req, res) => {
    StudentController.getStudents(req, res, (err, data) => {
        if (err) {
            console.log(err);
            return res.status(500).send({ message: err });
        }
        res.json(data);
    })
});

router.get('/:id', (req, res) => {
    StudentController.getStudentById(req, res, (err, data) => {
        if (err) {
            console.log(err);
            return res.status(500).send({ message: err });
        }
        res.json(data);
    })
});

router.post('/', (req, res) => {
    StudentController.createStudent(req, res, (err, data) => {
        if (err) {
            console.log(err);
            return res.status(500).send({ message: err });
        }
        res.status(201).json(data);
    })
});

router.put('/:id', (req, res) => {
    StudentController.updateStudent(req, res, (err, data) => {
        if (err) {
            console.log(err);
            return res.status(500).send({ message: err });
        }
        res.json(data);
    });
});

router.delete('/:id', (req, res) => {
    StudentController.deleteStudent(req, res, (err, data) => {
        if (err) {
            console.log(err);
            return res.status(500).send({ message: err });
        }
        res.json(data);
    });
})

module.exports = router;