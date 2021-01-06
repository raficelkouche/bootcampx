SELECT teachers.name AS name, COUNT(assistance_requests.*) as total_assistances
FROM assistance_requests
JOIN teachers ON teacher_id = teachers.id
WHERE teachers.name = 'Waylon Boehm'
GROUP BY teachers.name