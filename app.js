const express = require('express');
const app = express();
const port = 3000;

app.get('/sweet', (req, res) => {
  res.send('Моя любимая сладость – торт 🍰');
});

app.listen(port, () => {
  console.log(`Приложение запущено: http://localhost:${port}/sweet`);
});
