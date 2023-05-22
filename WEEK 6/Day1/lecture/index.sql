CREATE TABLE IF NOT EXISTS students (
ID serial PRIMARY KEY, 
firstName varchar(100),
lastName  varchar(100),
dob date ,
grade IS NOT null 
);

INSERT INTO students ( firstName,lastName,grade) VALUES
('UZUMAKI', 'NARUTO', 2 ),
('GOLAM', 'DHIVYESH', 1),
('UCHIHA','SASUKE', 3),
('ICHIGO','KUROSAKI', 4 );

SELECT * FROM students

''