const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send("OVER THE LINE")
})

app.listen(PORT, ()=> console.log('The dude abides on port', PORT))