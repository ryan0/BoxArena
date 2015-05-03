CREATE TABLE users
(
	id serial PRIMARY KEY,
	name varchar(255) NOT NULL,
	password varchar(255) NOT NULL,
	UNIQUE (name)
);

CREATE TABLE players
(
	id int PRIMARY KEY,
	x float NOT NULL,
	y float NOT NULL,
	FOREIGN KEY (id) REFERENCES users(id)
);
