const db=require('../db/db');

class StudentModel{
    async getAllStudents(limit,offset){
        const students = await db.query('SELECT * FROM students LIMIT $1 OFFSET $2', [limit,offset]);
        const count = await db.query('SELECT COUNT(*) FROM students');
        return {students:students.rows, total:parseInt(count.rows[0].count)};
    }

    async createStudent({name,email,age,marks}){
        const result= await db.query(
            'INSERT INTO students (name, email, age) VALUES ($1, $2, $3) RETURNING id',
            [name,email,age]
        );
        const studentId= result.rows[0].id;

        for(const mark of marks){
            await db.query(
                'INSERT INTO marks (student_id, subject, marks) VALUES ($1, $2, $3)',
                [studentId, mark.subject, mark.marks]
            );
        }
        
        return studentId;
    }

    async getStudentById(id){
        const student = await db.query('SELECT * FROM students WHERE id = $1', [id]);
        const marks = await db.query('SELECT * FROM marks WHERE student_id = $1', [id]);
        return {...student.rows[0],marks: marks.rows };
    }

    async createStudent({ name, email, age, marks }) {
        const result = await db.query(
            'INSERT INTO students (name, email, age) VALUES ($1, $2, $3) RETURNING id',
            [name, email, age]);
        const studentId = result.rows[0].id;
        for (const mark of marks) {
            await db.query(
                'INSERT INTO marks (student_id, subject, score) VALUES ($1, $2,$3)',
                [studentId,mark.subject,mark.score]);
        }
        return studentId;   
    }

    async updateStudent(id,name,email,age){
        await db.query('UPDATE students SET name = $1, email= $2, age = $3 WHERE id= $4',
            [name,email,age,id]);
        
    }

    async deleteStudent(id){
        await db.query('DELETE FROM students WHERE id=$1',[id]);
    }
}

module.exports = new StudentModel();