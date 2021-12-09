DROP TABLE IF EXISTS posts;

CREATE TABLE posts (
    id serial PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    pseudonym VARCHAR (20) NOT NULL,
    message VARCHAR(255) NOT NULL
);