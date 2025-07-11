-- Create students table
CREATE TABLE IF NOT EXISTS students (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  age INT
);

-- Create marks table
CREATE TABLE IF NOT EXISTS marks (
  id SERIAL PRIMARY KEY,
  student_id INT NOT NULL,
  subject VARCHAR(50),
  score INT,
  CONSTRAINT fk_student FOREIGN KEY (student_id) REFERENCES students(id) ON DELETE CASCADE
);
