DROP TABLE IF EXISTS posts;

CREATE TABLE posts (
    id serial PRIMARY KEY,
    title VARCHAR(20) NOT NULL,
    pseudonym VARCHAR (20) NOT NULL,
    body VARCHAR(100) NOT NULL,
);