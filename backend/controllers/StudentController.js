const StudentModel = require('../models/StudentModel');

class StudentController {

    async getStudents(req, res, cb) {
        try {
            const page = parseInt(req.query.page || 1);
            const limit = parseInt(req.query.limit || 10);
            const offset = (page - 1) * limit;

            const { students, total } = await StudentModel.getAllStudents(limit, offset);
            cb(null, { students, total, page, limit });
        } catch (err) {
            cb(err,null);
        }
    }

    async getStudentById(req,res, cb){  
        try{
            const student = await StudentModel.getStudentById(req.params.id);
            if(!student){
                return cb({message: 'Student not found', status: 404});
            }
            cb(null, student); 
        } catch(err){
            cb(err,null);
        }
    }

    async createStudent(req,res,cb){
        try{
            const id = await StudentModel.createStudent(req.body);
            cb(null,{message:'Student created',id}); 
        } catch(err){
            cb(err,null);
        }
    }

    async updateStudent(req,res,cb){
        try {
            const id = req.params.id;
            const name = req.body.name;
            const email = req.body.email;
            const age = req.body.age;
            await StudentModel.updateStudent(id, name, email,age);
            cb(null,{message:'Student updated'});
        } catch (err) {
            cb(err);
        }
    }

    async deleteStudent(req,res,cb){
        try {
            const id = req.params.id;
            await StudentModel.deleteStudent(id);
            cb(null,{message:'Student deleted'});
        } catch (err) {
            cb(err)
        }
    }
}

module.exports = new StudentController();