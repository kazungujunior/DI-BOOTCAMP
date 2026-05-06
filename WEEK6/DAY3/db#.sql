Exercises XP
Exercise 1 : DVD Rental
Get a list of all film languages
select title, name from film join language on 
film.language_id = language.language_id
OR

SELECT name
FROM languages


Get a list of all films joined with their languages – select only the film title, description, and language name. Try your query with different joins:
Get all films, even if they don’t have languages
Missing Correction
Get all languages, even if there are no films in those languages. Which languages are these?
    select title,description, name from film join language on film.language_id = language.language_id

    select title,description, name from film left join language on film.language_id = language.language_id

    select title,description, name from film right join language on film.language_id = language.language_id

    select title,description, name from film full join language on film.language_id = language.language_id

    select title,description, name from language full join film on language.language_id = film.language_id

    select title,description, name from film full join language on film.language_id = language.language_id where film.language_id is null
Create a new table called customer_review , to contain data about film reviews that customers will make. It should have the following columns:
review_id – a primary key, non null, auto-increment
film_id – references the film table. The film that is being reviewed.
language_id – references the language table. What language the review is in.
title – the title of the review
score – the rating of the review (1-10)
review_text – the text of the review. No limit on the length.
last_update – when the review was last updated.
CREATE TABLE new_film (
    id SERIAL PRIMARY KEY,
    name VARCHAR (50)
    )

    INSERT INTO new_film (title) VALUES     
    ('Film Small Desk'),
    ('Film Large desk'),
    ('Film Fan')
    RETURNING *;

    CREATE TABLE customer_review 
    (
        review_id SERIAL NOT NULL,
        film_id INT NOT NULL,
        language_id INT,
        title VARCHAR(255),
        score INT,
        review_text text,
        last_update TIMESTAMP,
        PRIMARY KEY (review_id),
        CONSTRAINT fk_film_id
        FOREIGN KEY (film_id)
            REFERENCES new_film (film_id)
            ON DELETE CASCADE,
        FOREIGN KEY (language_id)
            REFERENCES language (language_id)
    );
Add 3 movie reviews. Make sure you link them to valid objects in the other tables.
 INSERT INTO customer_review (film_id, language_id, title, score, review_text, last_update) VALUES
    (3, 1, 'Focus', 8, 'Guy steels stuff with a bunch of other people', '16/02/2021'),
    (4, 1, 'The big lebowski', 10, 'The Dude, dude', '16/02/2021')

Delete a film that has a review, what happens to the customer_review table?
DELETE FROM new_film WHER id = 3
After deleting the movie, the whole review got deleted
Exercise 2 : DvdRental
We will use the newly installed dvdrental database.

Last time we discovered that the films in the database were all in English. Use UPDATE to change a few of them to another language. Make sure that you use valid languages…
UPDATE film SET language_id = '2' WHERE film_id < 10;
    UPDATE film SET language_id = '3' WHERE film_id = 100;
    UPDATE film SET language_id = '4' WHERE film_id > 104 AND film_id < 115;

Which foreign keys (references) are defined for the customer table? How does this affect the way in which we INSERT into the customer table?
store_id and address_id are connected as references.
The numbers are picked according to the reference ID's,
so can be in random order depoending on the input
We created a new table called customer_review. Drop this table. Is this an easy step, or does it need extra checking?
DROP TABLE customer_review;
No extra step, because the dependecies are on a foreign key
Find out how many rentals are still outstanding. (ie. have not been returned to the store yet)
select COUNT(*) from rental WHERE return_date IS NULL;
Mark the 30 most expensive movies which are outstanding (ie. have not been returned to the store yet)
select rental.rental_id, film.title, film.rental_rate
from (inventory join rental on inventory.inventory_id = rental.inventory_id)
join film on film.film_id = inventory.film_id
where return_date is null
order by rental_rate desc
limit 30
Your friend is at the store, and decides to rent a movie. He knows he wants to see 4 movies, but he can’t remember their names. Can you help him find which movies he is talking about?
The 1st film : The film is about a sumo wrestler, and one of the actors is Penelope Monroe.
SELECT title FROM film
JOIN film_actor ON film_actor.film_id=film.film_id
WHERE fulltext @@ to_tsquery('sumo')
AND actor_id = (SELECT actor_id FROM actor
              WHERE first_name = 'Penelope'
              AND last_name = 'Monroe');
OR

select film.title
from (actor join film_actor on actor.actor_id = film_actor.actor_id)
join film on film.film_id = film_actor.film_id
where film.description like '%Sumo%' 
and actor.first_name = 'Penelope' 
and actor.last_name = 'Monroe'


2. The 2nd film : A short documentary (less than 1 hour long), rated “R”.

SELECT title FROM film
JOIN film_category ON film.film_id = film_category.film_id
WHERE category_id = 6
AND length < 60
AND rating = 'R';
The 3rd film: A film that his friend Matthew Mahan rented. He paid over $4.00 for the rental, and he returned it between the 28th of July and the 1st of August, 2005.
SELECT film.title, customer.first_name, customer.last_name,
payment.payment_id, payment.amount, return_date
FROM rental JOIN customer
ON rental.customer_id = customer.customer_id
JOIN payment ON rental.rental_id = payment.rental_id
JOIN inventory ON rental.inventory_id = inventory.inventory_id
JOIN film ON inventory.film_id = film.film_id
WHERE customer.first_name = 'Matthew'
AND customer.last_name = 'Mahan'
AND rental.return_date < '2005-08-01'
AND rental.return_date > '2005-07-28'
AND payment.amount > 4;
OR

SELECT film.title 
FROM film
ON film.film_id = inventory.film_id
JOIN rental
ON rental.inventory_id = inventory.inventory_id
JOIN customer
ON rental.customer_id = customer.customer_id
WHERE first_name = 'Matthew'
AND last_name = 'Mahan'
AND rental_rate > 4
AND rental.return_date BETWEEN '28/07/2005' AND '01/08/2005'
The 4th film : His friend Matthew Mahan watched this film, too. It had the word ‘boat’ in the title or description, and it looked like it was a very expensive DVD to replace.
SELECT title, description, film.replacement_cost
FROM rental JOIN customer ON rental.customer_id = customer.customer_id
JOIN inventory ON rental.inventory_id = inventory.inventory_id
JOIN film ON inventory.film_id = film.film_id
WHERE customer.first_name = 'Matthew'
AND customer.last_name = 'Mahan'
AND lower(description) LIKE '%boat%' OR lower(title) LIKE '%boat%'
ORDER BY replacement_cost DESC;
OR

SELECT film.title, film.description, film.replacement_cost
FROM film
JOIN inventory
ON film.film_id = inventory.film_id
JOIN rental
ON rental.inventory_id = inventory.inventory_id
JOIN customer
ON rental.customer_id = customer.customer_id
where customer.first_name = 'Matthew'
and customer.last_name = 'Mahan'
and film.title like '%Boat%' 
or film.description like '%Boat%'
order by film.replacement_cost desc
limit 1
Exercises XP GOLD
Exercise 1
Get a list of all rentals which are out (have not been returned). How do we identify these films in the database?
SELECT film.title FROM rental
JOIN inventory ON inventory.inventory_id = rental.inventory_id
JOIN film ON film.film_id = inventory.film_id
WHERE return_date IS NULL;
Get a list of all customers who have unreturned rentals. Make sure to group your results…
SELECT customer.first_name, customer.last_name FROM rental
JOIN customer ON rental.customer_id = customer.customer_id
WHERE rental.return_date IS NULL
GROUP BY customer.customer_id
Get a list of all the Action films that Joe Swank has acted in
SELECT film.title FROM film_actor
JOIN actor ON actor.actor_id = film_actor.actor_id
JOIN film ON film.film_id = film_actor.film_id
JOIN film_category ON film.film_id = film_category.film_id
JOIN category ON film_category.category_id = category.category_id
WHERE category.name = 'Action'
AND actor.first_name = 'Joe'
AND actor.last_name = 'Swank';

SELECT film_info FROM actor_info
WHERE first_name = 'Joe'
AND last_name = 'Swank';
Before you start, could there be a shortcut to getting this information? Maybe a view?
CREATE VIEW joe as select title, film_actor.actor_id, actor.first_name, actor.last_name from film join film_actor on film.film_id = film_actor.film_id join actor on film_actor.actor_id = actor.actor_id where first_name= 'Joe' and last_name= 'Swank';
Exercise 2 – Happy Halloween
There is a zombie plague approaching! The DVD rental company is offering to lend all of its DVDs to the local shelters, so that the citizens can watch the movies together in the shelters until the zombies are destroyed by the armed forces. Prepare tables of the following data:

How many stores there are, and in which city and country they are located.
SELECT count(city) as stores, country, city FROM city 
JOIN country ON city.country_id = country.country_id 
JOIN address ON city.city_id = address.city_id 
Group by city, country Order by country, city, count(city)
How many hours of viewing time there are in total in each store – in other words, the sum of the length of every inventory item in each store.
SELECT store_id, sum(length) as total_minutes FROM inventory JOIN film ON inventory.film_id = film.film_id Group by store_id
Make sure to exclude any inventory items which are not yet returned. (Yes, even in the time of zombies there are people who do not return their DVDs…)
Missing Correction
A list of all customers in the cities where the stores are located.
Missing Correction
A list of all customers in the countries where the stores are located.
Missing Correction
Some people will be frightened by watching scary movies while zombies walk the streets. Create a ‘safe list’ of all movies which do not include the ‘Horror’ category, or contain the words ‘beast’, ‘monster’, ‘ghost’, ‘dead’, ‘zombie’, or ‘undead’ in their titles or descriptions… Get the sum of their viewing time (length). Hint : use the CHECK contraint
Missing Correction
For both the ‘general’ and the ‘safe’ lists above, also calculate the time in hours and days (not just minutes).
Missing Correction
Exercises XP NINJA
Exercise 1
We want to encourage families and kids to enjoy our movies.

Retrieve all films with a rating of G or PG, which are not out (they have been returned/have never been borrowed).
Create a new table which will represent a waiting list for children’s movies. This will allow a child to add her name to the list until the DVD is available (has been returned). Once the child takes the DVD out, her name should be removed from the waiting list (ideally using triggers, but we have not learned about them yet. Let’s assume that our Python program will manage this). Which table references should be included?
Retrieve the number of people waiting for each children’s DVD. Test this by adding rows to the table that you created in question 2 above.
Missing Correction

Daily Challenge : Tables Relationships
Create 3 different tables, each one with a different relationship.
Join them with all the types of PostgreSQL Joins
CREATE TABLE passports (passport_id INTEGER PRIMARY KEY, country_id INTEGER, expiry_date DATE);

CREATE TABLE person ( tz SERIAL PRIMARY KEY, passport_id INTEGER UNIQUE, f_name VARCHAR (50) NOT NULL, l_name VARCHAR (50) NOT NULL, birthdate DATE NOT NULL, FOREIGN KEY (passport_id) REFERENCES passports(passport_id) );

CREATE TABLE passport_stamps( stamp_id SERIAL PRIMARY KEY, airport_id INTEGER NOT NULL, passport_id INTEGER NOT NULL, FOREIGN KEY (passport_id) REFERENCES passports (passport_id) );

CREATE TABLE airports ( airport_id SERIAL PRIMARY KEY, country_name VARCHAR (50) );

CREATE TABLE people_visiting_airports( airport_id INTEGER, tz INTEGER, PRIMARY KEY (airport_id, tz), FOREIGN KEY (airport_id) REFERENCES airports(airport_id), FOREIGN KEY (tz) REFERENCES person(tz) )

SELECT * FROM passports JOIN person ON passports.passport_id = person.passport_id;

SELECT * FROM passports LEFT JOIN person ON passports.passport_id = person.passport_id;

SELECT * FROM passports RIGHT JOIN person ON passports.passport_id = person.passport_id;

SELECT * FROM passports FULL JOIN person ON passports.passport_id = person.passport_id;
OR

CREATE DATABASE challenge;

CREATE TABLE engine 
(
    engine_id SERIAL NOT NULL,
    eng_type VARCHAR(255),
    volume INT,
    last_update TIMESTAMP,
    PRIMARY KEY (engine_id)
);

CREATE TABLE color 
(
    color_id SERIAL NOT NULL,
    title VARCHAR(255),
    last_update TIMESTAMP,
    PRIMARY KEY (color_id)
);

CREATE TABLE car 
(
    car_id SERIAL NOT NULL,
    title VARCHAR(255),
    discription VARCHAR(255),
    engine_id INT,
    color_id INT,
    year_built DATE,
    last_update TIMESTAMP,
    PRIMARY KEY (car_id),
    CONSTRAINT fk_engine_id
    FOREIGN KEY (engine_id)
        REFERENCES engine (engine_id)
        ON DELETE CASCADE,
    CONSTRAINT fk_color_id
    FOREIGN KEY (color_id)
        REFERENCES color (color_id)
        ON DELETE CASCADE
);

SELECT car.title, engine.eng_type, engine.volume, color.title
FROM car
INNER JOIN engine
ON car.engine_id = engine.engine_id
INNER JOIN color
ON car.color_id = color.color_id;

SELECT car.title, engine.eng_type, engine.volume, color.title
FROM car
LEFT JOIN engine
ON car.engine_id = engine.engine_id
LEFT JOIN color
ON car.color_id = color.color_id;

SELECT car.title, engine.eng_type, engine.volume, color.title
FROM car
RIGHT JOIN engine
ON car.engine_id = engine.engine_id
RIGHT JOIN color
ON car.color_id = color.color_id;

SELECT car.title, engine.eng_type, engine.volume, color.title
FROM car
FULL OUTER JOIN engine
ON car.engine_id = engine.engine_id
FULL OUTER JOIN color
ON car.color_id = color.color_id;
Database Concepts #2
1HOUR Challenge: Arcade Game
Solution - Exercises - W6D3
