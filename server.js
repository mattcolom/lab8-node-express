// CS 351 Lab 8.1 and 8.2: Express app, traditional form and REST API.
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Part A: traditional HTML form posts to Express and receives a new HTML page.
app.post('/readCustomerInfoAndRespond', (req, res) => {
  const name = String(req.body.name || '').trim();
  const email = String(req.body.email || '').trim();
  const escapeHtml = (value) => value.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  res.type('html').send(`<!doctype html><html lang="en"><head><meta charset="utf-8"><title>Traditional Response</title></head><body><h1>Welcome ${escapeHtml(name)}</h1><p>We will contact you at ${escapeHtml(email)}</p><a href="/">Return to the lab</a></body></html>`);
});

// Part B: REST endpoint responds to the same form data with JSON.
app.post('/api/customer', (req, res) => {
  const name = String(req.body.name || '').trim();
  const email = String(req.body.email || '').trim();
  res.json({ message: `Welcome ${name}`, email });
});

// Extra demo routes from Lab 8.1 remain available.
app.get('/api/message', (req, res) => res.json({message: "Hello from Matt's Node.js + Express backend!"}));
app.post('/api/greet', (req, res) => res.json({message: `Hello, ${String(req.body.name || '').trim()}! Your request reached the Express server.`}));
app.listen(PORT, '0.0.0.0', () => console.log(`Server running at http://localhost:${PORT}`));
