// CS 351 Lab 8 - Node.js + Express backend
// This server hosts the frontend and exposes a REST API.
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// REST endpoint used by the frontend with fetch() (Lab 8.2)
app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from Matt\'s Node.js + Express backend!', source: 'Express REST API' });
});

// Example POST REST endpoint to demonstrate sending client data.
app.post('/api/greet', (req, res) => {
  const name = typeof req.body?.name === 'string' ? req.body.name.trim().slice(0, 80) : '';
  if (!name) return res.status(400).json({ error: 'Please enter a name.' });
  res.json({ message: `Hello, ${name}! Your request reached the Express server.` });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`CS 351 Lab 8 server running at http://localhost:${PORT}`);
});
