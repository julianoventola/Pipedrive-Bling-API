const express = require('express');
const cors = require('cors');
const router = require('./routes');

// --> GLOBALS <--
const PORT = process.env.PORT || 3333;

// Server
const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`Server runnin on port ${PORT}`);
});
