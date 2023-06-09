--CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    last_name VARCHAR(255),
    first_name VARCHAR(255),
    birth_date DATE;

--SELECT * FROM students

--INSERT INTO students (first_name, last_name, birth_date)
--VALUES
    ('Marc', 'Benichou', '1998-11-02'),
    ('Yoan', 'Cohen', '2010-12-03'),
    ('Lea', 'Benichou', '1987-07-27'),
    ('Amelia', 'Dux', '1996-04-07'),
    ('David', 'Grez', '2003-06-14'),
    ('Omer', 'Simpson', '1980-10-03');
	--SELECT * FROM students
	
	(1)SELECT first_name, last_name FROM students;
	(2)SELECT first_name, last_name FROM students WHERE id = 2;
	(3)SELECT first_name, last_name FROM students WHERE last_name = 'Benichou' OR first_name = 'Marc';
	(4)SELECT first_name, last_name FROM students WHERE first_name LIKE '%a%';
	(5)SELECT first_name, last_name FROM students WHERE first_name LIKE 'a%';
	(6)SELECT first_name, last_name FROM students WHERE first_name LIKE '%a';
	(7)SELECT first_name, last_name FROM students WHERE first_name LIKE '_a%a';
    (8)SELECT first_name, last_name FROM students WHERE id IN (1, 3);
    (9)SELECT * FROM students WHERE birth_date >= '2000-01-01';

    