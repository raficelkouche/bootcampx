SELECT cohorts.name as cohort_name, count(assignment_submissions.*)
FROM cohorts
JOIN students ON cohort_id = cohorts.id
JOIN assignment_submissions ON student_id = students.id
GROUP BY cohort_name
ORDER BY count(assignment_submissions.*) DESC