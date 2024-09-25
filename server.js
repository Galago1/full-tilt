const express = require('express');
const path = require('path');

const port = process.env.PORT || 3000;
const app = express();

// Serve static files from the Storybook directory
app.use(express.static(path.join(__dirname, 'storybook-static')));

// Optionally, redirect the base URL to the Storybook index
app.get('/', (req, res) => {
  res.redirect('/index.html');
});

app.listen(port, () => {
  console.log(`Storybook running on http://localhost:${port}`);
});
