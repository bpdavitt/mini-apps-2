const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Get yo bitcoins');
});

app.listen(PORT, () => console.log('Crypto Server running on port', PORT))