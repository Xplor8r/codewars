SELECT id, name
FROM departments
WHERE EXISTS 
  (SELECT *
   FROM sales
   WHERE price > 98.00);
