CREATE TABLE Users
(
	Id serial PRIMARY KEY,
	Username varchar(255) NOT NULL,
	Password varchar(255) NOT NULL,
	UNIQUE (username)
);

CREATE TABLE Players
(
	Id int PRIMARY KEY,
	Xpos float NOT NULL,
	Ypos float NOT NULL,
	FOREIGN KEY (Id) REFERENCES users(Id)
);
