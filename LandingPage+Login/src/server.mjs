import express from 'express';
import bodyParser from 'body-parser';
import fs from 'fs/promises';
import path from 'path';

// Create an Express application
const app = express();
const PORT = 5000;
const dataFilePath = path.resolve('userData.json');

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Endpoint to handle login data
app.post('/login', async (req, res) => {
  const userData = req.body;
  let data = [];

  try {
    // Read existing data from the JSON file if it exists
    if (fs.existsSync(dataFilePath)) {
      data = JSON.parse(await fs.readFile(dataFilePath, 'utf-8'));
    }

    // Add new login data to the array
    data.push({ type: 'login', ...userData });

    // Write updated data back to the JSON file
    await fs.writeFile(dataFilePath, JSON.stringify(data, null, 2));

    // Send a success response
    res.send({ status: 'success', message: 'Login data stored successfully' });
  } catch (err) {
    console.error('Error:', err);
    res.status(500).send({ status: 'error', message: 'Internal Server Error' });
  }
});

// Endpoint to handle signup data
app.post('/signup', async (req, res) => {
  const userData = req.body;
  let data = [];

  try {
    // Read existing data from the JSON file if it exists
    if (fs.existsSync(dataFilePath)) {
      data = JSON.parse(await fs.readFile(dataFilePath, 'utf-8'));
    }

    // Add new signup data to the array
    data.push({ type: 'signup', ...userData });

    // Write updated data back to the JSON file
    await fs.writeFile(dataFilePath, JSON.stringify(data, null, 2));

    // Send a success response
    res.send({ status: 'success', message: 'Signup data stored successfully' });
  } catch (err) {
    console.error('Error:', err);
    res.status(500).send({ status: 'error', message: 'Internal Server Error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${5170}`);
});