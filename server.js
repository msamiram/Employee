const express = require('express');
const app = express();
const port = 3000;

const employees = [
  { id: 1, name: 'Elnur', position: 'Developer', salary: 2000 },
  { id: 2, name: 'Leyla', position: 'Designer', salary: 1800 },
  { id: 3, name: 'Rəşad', position: 'Project Manager', salary: 2500 }
];

app.get('/employees', (req, res) => {
  res.json(employees);
});

app.listen(port, () => {
  console.log(`Server http://localhost:${port} adresində işləyir`);
});