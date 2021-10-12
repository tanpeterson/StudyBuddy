const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const PORT = 3000;

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '../public')));

app.post('/EditDeck', (req, res) => {
  console.log(req.body);
})

module.exports = app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
