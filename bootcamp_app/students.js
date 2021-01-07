const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  user: 'vagrant',
  password: '123',
  database: 'bootcampx'
});

pool.query(`
  SELECT students.id as student_id, cohorts.name as cohort_name, students.name as student_name
  FROM students 
  JOIN cohorts ON cohorts.id = cohort_id
  WHERE cohorts.name LIKE '${process.argv[2]}%' 
  LIMIT ${process.argv[3] || 5};
  `)
  .then(res => {
    res.rows.forEach(user => {
      console.log(`${user.student_name} has an id of ${user.student_id} and was in the ${user.cohort_name} cohort`);
    })
  })
  .catch(err => console.log('query error', err.stack));

  pool.end();