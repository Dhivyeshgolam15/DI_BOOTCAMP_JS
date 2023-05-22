//CREATE TABLE actors (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
   -birth_date DATE NOT NULL);
   
   SELECT * FROM actors
   
//INSERT INTO actors (first_name, last_name, birth_date)VALUES 
('Robert', 'Downey Jr.', '1965-04-04'),
('Meryl', 'Streep', '1949-06-22'),
('Brad', 'Pitt', '1963-12-18');

//select * from actors 

SELECT COUNT(*) FROM actors;