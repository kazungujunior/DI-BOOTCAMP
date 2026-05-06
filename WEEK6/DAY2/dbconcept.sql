Exercises XP
Exercise 1 : Continuation of the public table
Use SQL to get the following from the database:
All items, ordered by price (lowest to highest).
SELECT * FROM items ORDER BY price ASC;
Items with a price above 80 (80 included), ordered by price (highest to lowest).
SELECT * FROM items WHERE price >= 80 ORDER BY price DESC;
The first 3 customers in alphabetical order (A-Z) – exclude ‘id’ from the results.
SELECT f_name, l_name FROM customers ORDER BY f_name ASC LIMIT 3;
All last names (no other columns!), in reverse alphabetical order (Z-A)
SELECT l_name FROM customers ORDER BY l_name DESC;
Create a table named purchases. It should have 2 columns : customer_id and item_id. These columns are references from the tables customers and items
CREATE TABLE purchases (customer_id INTEGER, item_id INTEGER, FOREIGN KEY (customer_id) REFERENCES customers (id), FOREIGN KEY (item_id) REFERENCES items (id));
Edit the data of the purchases table:
Add a row which references a customer by ID, but does not reference an item by ID (leave it blank). Does this work? Why/why not?
Add 5 rows which reference existing customers and items.
INSERT INTO purchases (customer_id, item_id) VALUES (5, 2), (2, 3), (1, 1), (3, 2), (4, 3);
Use SQL to get the following from the database:
All purchases. Is this information useful to us?
SELECT * FROM purchases;
All purchases, joining with the customers table.
SELECT * FROM purchases INNER JOIN customers ON purchases.customer_id = customers.id;
Purchases of the customer with the ID equal to 4.
SELECT * FROM purchases INNER JOIN customers ON purchases.customers_id = customers.id WHERE customers.id = 4;
Purchases for a large desk AND a small desk
SELECT * FROM purchases INNER JOIN items ON purchases.item_id = items.id WHERE items.type = 'Large Desk' OR items.type = 'Small Desk';
Create a purchase for Scott Scott – he bought a hard drive.
Insert into items (item, price) values ('Hard drive', 90);
Insert into purchases(customer_id, item_id) values ( (select id from customer where f_name = 'Scott' and l_name = 'Scott'), (select id from items where item = 'Hard drive'))
Use SQL to show all the customers who have made a purchase. Show the following fields/columns:
Customer first name
Customer last name
Item name

SELECT first_name, last_name, item FROM purchases INNER JOIN customers ON purchases.customers_id = customers.id JOIN items ON purchases.items_id = items.id

Exercise 2 : DVD Rental
Write a query to select all the columns from the table “customer” in the database named dvdrental.
select * from customer
Write a query to display the names (first_name, last_name) using an alias named “full_name”.
SELECT first_name || ' ' || last_name AS full_name FROM customer;
You want to know every date where one or several accounts were created. Write a query to select the dates of creation from the “customer” table, it should’nt have duplicates.
select distinct create_date from customer
Write a query to get the details of all customers from the customer table in descending order by their first name.
select * from customer order by first_name desc
Write a query to get the film ID, title, description, year of release and rental rate in ascending order according to their rental rate.
select film_id, title, description, release_year, rental_rate from film order by rental_rate asc
Write a query to get the address, the district and the phone number from the customers living in the district Texas in the “address” table.
select first_name, last_name, district from customer inner join address on customer.address_id = address.address_id where district = 'Texas'
Write a query to retrieve the details of the movies with the id 15 and 150.
select * from film where film_id = 15 or film_id = 150
Pick your favorite movie. Write a query to see if the rental shop owns it. Write a query to get the film ID, the title, the description, the length and the rental rate from the film table for your movie title.
select film_id, title, description, length, rating from film where title = 'Inception'
Didn’t find it ? Maybe you made a mistake in the name. Write a query to get the film ID, the title, the description, the length and the rental rate from the “film” table for all the movies starting with the two first letters of your movie.
select film_id, title, description, length, rating from film where title ilike 'in%'
You want to have a choice between ten propositions of movies and you want the cheapest ones. Write a query to find the 10th cheapest movies.
select * from film order by rental_rate asc limit 10
You are not satisfied with the results. Write a query to find the 10th next cheapest movies. Try to not use LIMIT.
select * from film order by rental_rate asc offset 10 fetch first 10 row only
Write a query to join the data of the customer table and the payment table. You want to get the amount and the date of every payment made by a customer, ordered by his id (from 1 to…).
select customer.customer_id, customer.first_name, customer.last_name as full_name, payment.amount, payment.payment_date from customer inner join payment on payment.customer_id = customer.customer_id order by customer.customer_id
You want to be assured of the performance of your sellers. Write a query to get the customer’s id, names (first and last), the amount and the date of payment ordered by the id of the staff who sold them the dvd.
select customer.first_name, customer.last_name, payment.payment_id, payment.payment_date, payment.amount, payment.staff_id from customer join payment on customer.customer_id = payment.customer_id group by payment.payment_date, payment.amount, payment.payment_id, customer.last_name, customer.first_name order by staff_id

OR

SELECT customer.customer_id, first_name || ' ' || last_name AS full_name, amount, payment_date FROM customerINNER JOIN payment ON customer.customer_id = payment.customer_id ORDER BY staff_id

You need to check your inventory. Write a query to get all the movies which are not in the inventory.
SELECT f.film_id, title FROM film f LEFT JOIN inventory i ON i.film_id = f.film_id WHERE i.film_id IS NULL ORDER BY title;

OR

SELECT * from film JOIN inventory on film.film_id = inventory.film_idWHERE film.film_id NOT IN (inventory.film_id)
15. Write a query to find which city is in which country.
select city.city, country.country from city join country on city.country_id = country.country_id

Exercises XP GOLD
Exercise 1 : DVD rental
You are going to babysit your cousin, and you want to find a few movies that he can watch with you.

Find out how many films there are for each rating
select rating, count(rating) from film group by rating

Get a list of all the movies that have a rating of G or PG-13
select title, rating from film where rating = 'G' or rating = 'PG-13'

Filter this list further: look for only movies that are under 2 hours long, and whose rental price (rental_rate) is under 3.00. Sort the list alphabetically.
SELECT title FROM film WHERE (rating = 'PG' OR rating = 'G') AND length <= 120 AND rental_rate < 3 ORDER BY title;

Find a customer in the customer table, and change his/her details to your details, using SQL UPDATE.
UPDATE customer SET first_name = 'Timothy', last_name = 'Smith', email = 'mybogusaddress@gmail.com' WHERE customer_id = 5;

Now find the customer’s address, and use UPDATE to change it to an address of your own (or make one up).
select customer.first_name, customer.address_id, address.adress from customer right join address on customer.address_id = address.address_id where customer_id = 1 update address set address = 'The white house', district = 'DC'

Classify. How can you produce a list of movies, where each of them is labelled as ‘cheap’ or ‘expensive’ depending on their rental rate ?

If the rental rate is less than 2$ the movie is labeled as cheap
If the rental rate is more than 2$ the movie is labeled as expensive
Return 2 columns: the title and the rental rate as “cost” (ie : cheap or expensive).
Missing Correction

Exercise 2 : Continuation of the students table
Update
Marc and Lea Benichou are twins. Change at the same time, their birth_date to 02/11/1998.
UPDATE students SET birth_date = '1998-11-02' WHERE last_name = 'Benichou'
Delete
Delete Lea Benichou
DELETE FROM students WHERE id = 5;
OR

DELETE FROM student WHERE first_name = 'Lea' AND last_name = 'Dupont';
Count
Count how many students are in the table
SELECT COUNT(*) FROM students
Count how many students were born after 1/01/2000
SELECT COUNT(*) FROM students WHERE birth_date > '2000-01-01';
Insert _ Alter
Add a column to the table student, called math_grade
ALTER TABLE students ADD COLUMN math_grade REAL
Add the grade 80 to the student which id is 1
UPDATE students SET math_grade = 80 WHERE id = 1;
Add the grade 90 to the students which id are 2 and 4
UPDATE students SET math_grade = 90 WHERE id = 2 or id= 4;
Add the grade 25 to the student which id is 6
UPDATE students SET math_grade = 25 WHERE id = 6;
Count how many students have a grade bigger than 83
SELECT COUNT(*) FROM students WHERE math_grade > 83;
Add another student named Omer Simpson with the same birth_date (as the one already in the table). Give him the grade 70.
INSERT INTO students 
(
    first_name,
    last_name,
    birth_date,
    math_grade
)
VALUES  
    ('Omer', 'Simpson', '03/10/1980', 70)
RETURNING *;

Count how many grades have each student.
SELECT first_name, last_name, count(math_grade) AS total_grade FROM student GROUP BY first_name, last_name
SUM
Do the sum of the grades of all the students. Use an alias called total_grade to fetch the grades
SELECT SUM (math_grades) AS total_grades FROM students;
Exercises XP Ninja
Exercise 1: Bonus Public Database (XP)
Fetch the last 2 customers in alphabetical order (A-Z) – exclude ‘id’ from the results.
SELECT * FROM (SELECT first_name, last_name, actor_id FROM actors ORDER BY actor_id DESC LIMIT 2) AS foo ORDER BY first_name ASC

Use SQL to delete the purchases of Scott
Missing Correction

Can we still find Scott in the customers table, even though he has been deleted? Give it a try.
Missing Correction

Use SQL to find all purchases. Join with the customers table, so that Scott’s order will show up, but for the customer’s first and last name, you should only see empty/blank. (Which kind of join should you use?)
Missing Correction

Use SQL to find all purchases. Join with the customers table, so that Scott’s order will NOT show up. (Which kind of join should you use?)
Missing Correction

Daily Challenge : SQL Puzzle
Q1. What will be the OUTPUT of the following statement?

1. count 0 - because comparing against null returns null.
Q2. What will be the OUTPUT of the following statement?

count 2
Q3. What will be the OUTPUT of the following statement?

count 0
Q4. What will be the OUTPUT of the following statement?

count 2
Database Concepts #1
