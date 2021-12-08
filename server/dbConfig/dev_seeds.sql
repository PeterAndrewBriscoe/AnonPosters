DROP TABLE IF EXISTS posts;

CREATE TABLE posts (
    id serial PRIMARY KEY,
    title VARCHAR(100)NOT NULL,
    pseudonym VARCHAR(20) NOT NULL,
    body VARCHAR(255) NOT NULL
);

INSERT INTO posts (title, pseudonym, body) 
VALUES
(
    'Thoughts on life', 
    'Elliot', 
    'Man everything sucks'
),
(
    'Met a man with an orange for a head the other day',
    'randomBartender1887',
    'He told me a wild story about love, loss, and how he got an orange for a head'
),
(
    'Why did Darth Vader go to the music shop?',
    'KyloHen',
    'To find the rebel bass'
);