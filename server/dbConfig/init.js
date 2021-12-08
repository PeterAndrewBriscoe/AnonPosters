const { Pool } = require("pg");
const fs = require('fs');
const db = new Pool();


const seeds = fs.readFileSync(__dirname + '/dev_seeds.sql').toString();

db.query(seeds, () => console.log('Dev database seeded'));

module.exports = db;