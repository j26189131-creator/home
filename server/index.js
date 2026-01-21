const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// API routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'Backend is running', timestamp: new Date() });
});

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  // Mock authentication logic
  if (email && password) {
    res.json({ success: true, message: 'Login successful', user: { email } });
  } else {
    res.status(400).json({ success: false, message: 'Invalid credentials' });
  }
});

app.post('/api/register', (req, res) => {
  const { name, email, password } = req.body;
  // Mock registration logic
  if (name && email && password) {
    res.json({ success: true, message: 'Registration successful', user: { name, email } });
  } else {
    res.status(400).json({ success: false, message: 'Missing fields' });
  }
});

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../client/dist')));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*path', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

