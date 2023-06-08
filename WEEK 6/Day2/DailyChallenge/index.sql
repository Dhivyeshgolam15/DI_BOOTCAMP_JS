-//part1

- Create Customer table
CREATE TABLE Customer (
  id INT PRIMARY KEY,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL
);

-- Create Customer profile table
CREATE TABLE CustomerProfile (
  id INT PRIMARY KEY,
  isLoggedIn BOOLEAN DEFAULT false,
  customer_id INT,
  FOREIGN KEY (customer_id) REFERENCES Customer(id)
);

-- Insert customers
INSERT INTO Customer (id, first_name, last_name)
VALUES
  (1, 'John', 'Doe'),
  (2, 'Jerome', 'Lalu'),
  (3, 'Lea', 'Rive');

-- Insert customer profiles using subqueries
INSERT INTO CustomerProfile (id, isLoggedIn, customer_id)
VALUES
  (1, (SELECT true FROM Customer WHERE first_name = 'John'), (SELECT id FROM Customer WHERE first_name = 'John')),
  (2, (SELECT false FROM Customer WHERE first_name = 'Jerome'), (SELECT id FROM Customer WHERE first_name = 'Jerome'));

-- Display the first_name of the LoggedIn customers
SELECT c.first_name
FROM Customer c
JOIN CustomerProfile cp ON c.id = cp.customer_id
WHERE cp.isLoggedIn = true;

-- Display all customers' first_name and isLoggedIn columns, including those without a profile
SELECT c.first_name, cp.isLoggedIn
FROM Customer c
LEFT JOIN CustomerProfile cp ON c.id = cp.customer_id;

-- Display the number of customers that are not LoggedIn
SELECT COUNT(*)
FROM Customer c
LEFT JOIN CustomerProfile cp ON c.id = cp.customer_id
WHERE cp.isLoggedIn = false OR cp.isLoggedIn IS NULL;

--part 2

