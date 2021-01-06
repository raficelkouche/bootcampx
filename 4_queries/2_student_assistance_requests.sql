SELECT students.name AS name, COUNT(requests.*) AS total_assistances
FROM assistance_requests AS requests
JOIN students ON students.id = requests.student_id
WHERE students.name = 'Elliot Dickinson'
GROUP BY name