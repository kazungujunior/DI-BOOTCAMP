Exercises XP
Exercise 1 : public table
Create a database named public and two tables : items and customers.

CREATE TABLE items (item_ID int Serial PRIMARY KEY,item varchar(255) NOT NULL,price int);
Add the following new items to the public.items table:

Small Desk – 100 (ie. price)
Large desk – 300
Fan – 80

insert into items (item, price) values ('Small Desk', 100), ('Large Desk', 300), ('Fan', 80);

Add 5 new customers to the public.customers table:

Greg Jones
Sandra Jones
Scott Scott
Trevor Green
Melanie Johnson
CREATE TABLE customers (f_name varchar(255),l_name varchar(255)); INSERT INTO customers (f_name, l_name) VALUES ('Greg', 'Jones'), ('Sandra', 'Jones'), ('Scott', 'Scott'), ('Trevor', 'Green'), ('Melanie', 'Johnson')

Use SQL to get the following data from the database:

All the items

SELECT * FROM items
2. All the items with a price above 80 (80 not included)
SELECT * FROM items WHERE price > 80
3. All the items with a price below 300
SELECT * FROM items WHERE price <= 300
4. All the customers with the last name ‘Smith’ (Will you get a result ?)
SELECT * FROM customers WHERE last_name = 'Smith' -- No result
5. All the customers with the last name ‘Jones’
SELECT * FROM customers WHERE last_name = 'Jones';
6. All the customers with a first name that is not ‘Scott’

SELECT * FROM customers WHERE first_name NOT LIKE 'Scott';



Exercises XP+
Exercise 1 : Students table
Create
Create a database named class
CREATE DATABASE class;
Create a table student. Add the columns: id, last_name, first_name, birth_date. (The id has to be auto_incremented)
CREATE TABLE students (id SMALLSERIAL PRIMARY KEY, first_name TEXT, last_name TEXT, birth_date DATE)


Insert
You have to reproduce exactly this table.
 INSERT INTO students VALUES ('Marc', 'Dupont','1998-11-02'),  (Yoan', 'Durant', '2010-03-12'), (Lea', 'Martin', '1987-07-24'),  ('Sarah', 'Benichou', '1996-04-07'), ('lea', 'Dupont', '2003-06-14'), ('Omer', 'Simpson', '1980-03-10')
Insert in the table, your last_name, first_name and birth_date.
Insert in the table, two more students. Be careful, you have to add them at the same time (with one request).
INSERT INTO students VALUES ('William', 'Shatner', '1955-04-25'), ('Dolly', 'Parton', '1959-11-29')


Select
Fetch all the data of the table
SELECT * FROM students
Fetch all the students’ first_name and last_name
SELECT first_name, last_name FROM students
Fetch only the student where the id is equal to 2 (show his first_name and last_name)
SELECT first_name, last_name FROM students WHERE id = 2;
Fetch only the student where the last_name is equal to Dupont AND the first_name is equal to Marc (show his first_name and last_name)

SELECT first_name, last_name FROM students WHERE first_name = 'Marc' AND last_name = 'Dupont';
Fetch only the students where the last_name is equal to Dupont OR the first_name is equal to Marc. (show their first_name and last_name)

SELECT first_name, last_name FROM students WHERE first_name = 'Marc' OR last_name = 'Dupont';
Fetch the students which first_name contains the letter “a”. (show their first_name and * last_name)

SELECT first_name, last_name FROM students WHERE first_name LIKE '%a%';
Fetch the students which first_name starts with the letter “a”. (show their first_name and last_name)

SELECT first_name, last_name FROM students WHERE first_name LIKE 'a%';
Fetch the students which first_name ends with the letter “a”. (show their first_name and * last_name)

SELECT first_name, last_name FROM students WHERE first_name LIKE '%a';
Fetch the students where the second to last letter of the first name is “a”. (show their first_name and last_name)

SELECT first_name, last_name FROM students WHERE first_name LIKE '%a_';
Fetch the students which the id are 1 and 3. (show their first_name and last_name)

SELECT first_name, last_name FROM students WHERE id = 1 OR id =3;
Fetch the students, which birth_date is equal or after the 1/01/2000. (show their first_name and last_name and birthdate)

SELECT first_name, last_name, birth_date FROM students WHERE birth_date > '2000-01-01';


Exercises XP Gold
Exercise 1 : Continuation of students
For the following questions, you have to fetch the first_name, last_name and birth_date of the students.
\1. Fetch the first four students. You have to order the answer by last_name alphabetically.

SELECT first_name, last_name, birth_date FROM students WHERE id <= 4 ORDER BY last_name ASC
\2. Fetch the birth_date of the youngest student.

SELECT first_name, last_name, birth_date FROM students ORDER BY birth_date DESC LIMIT 1
\3. Fetch three students, skipping the first two students.

SELECT first_name, last_name, birth_date FROM students
OFFSET 2 LIMIT 3


Daily Challenge : SQL basics
Using the table actors from the lesson,

Count how many actors are in the table
Try to add a new actor, with some blank fields. What happens ?
SELECT count(*) FROM actors
INSERT INTO actors(f_name, l_name, age, num_oscars) VALUES (NULL)
--> can't be done since f_name and l_name are a must value
-> It shows me, that there is an argument missing at number_oscars because we defined, that this field can't be NULL
Introduction to Databases
Solution - Exercises - W6D1
