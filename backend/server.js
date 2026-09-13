const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'taskflow-backend' });
});

app.get('/api/tasks', (req, res) => {
  res.json([
    { id: 1, title: 'Configurer le pipeline CI/CD', done: false },
    { id: 2, title: 'Dockeriser l\'application', done: false }
  ]);
});

app.listen(PORT, () => {
  console.log(`Backend démarré sur le port ${PORT}`);
});