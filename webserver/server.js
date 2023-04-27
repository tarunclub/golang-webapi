const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
  res.status(200).json({
    success: 'true',
    message: 'Hello, World',
  });
});

app.listen(port, () => {
  console.log(`Server is running on localhost:${port}`);
});
