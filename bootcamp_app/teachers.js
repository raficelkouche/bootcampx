const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  user: 'vagrant',
  password: '123',
  database: 'bootcampx'
});

console.log(pool ? "connected": "could not establish connection to DB");

const queryString = `
  SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
  FROM assistance_requests
  JOIN students ON students.id = student_id
  JOIN cohorts ON cohorts.id = cohort_id
  JOIN teachers ON teachers.id = teacher_id
  WHERE cohorts.name = $1
  ORDER BY teacher;
  `;

const values = [`${process.argv[2] || 'JUL02'}`];

pool.query(queryString, values)
  .then(res => {
    res.rows.forEach(teacher => {
      console.log(`${teacher.cohort}: ${teacher.teacher}`);
    });
  })
  .catch(err => console.log("query error", err.stack));

  pool.end();