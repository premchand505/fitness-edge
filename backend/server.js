import express from 'express';
import cors from 'cors';
import contactRouter from './contact.js';

const app = express();

// Middleware
app.use(cors({ origin: 'http://localhost:5173' })); // Allow Vite frontend
app.use(express.json());

// Routes
app.use('/api', contactRouter);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});