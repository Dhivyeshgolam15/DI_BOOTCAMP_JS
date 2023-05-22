--CREATE TABLE items (
    id INT PRIMARY KEY,
    name VARCHAR(255),
    price INT;
	--SELECT * FROM items
	

--INSERT INTO items (name, price)
--VALUES
    ('Small Desk', 100),
    ('Large Desk', 300),
    ('Fan', 80);
	--SELECT * FROM items

--CREATE TABLE customers (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255),
    last_name VARCHAR(255));
 --SELECT * FROM customers
 
-- INSERT INTO customers (first_name, last_name)VALUES

    ('Greg', 'Jones'),
    ('Sandra', 'Jones'),
    ('Scott', 'Scott'),
    ('Trevor', 'Green'),
    --('Melanie', 'Johnson');
	--SELECT * FROM customers
 
		-- Fetch all items
SELECT * FROM items;

-- Fetch items with a price above 80 (80 not included)
SELECT * FROM items WHERE price > 80;

-- Fetch items with a price below 300 (300 included)
SELECT * FROM items WHERE price < 300;

-- Fetch customers whose last name is 'Smith'
SELECT * FROM customers WHERE last_name = 'Smith';

-- Fetch customers whose last name is 'Jones'
SELECT * FROM customers WHERE last_name = 'Jones';

-- Fetch customers whose first name is not 'Scott'
SELECT * FROM customers WHERE first_name != 'Scott';