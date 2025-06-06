const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const app = express();

const clientRoutes = require('./routes/clientRoutes');
const programRoutes = require('./routes/programRoutes');
const { swaggerUi, swaggerSpec } = require('./swagger');
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
const errorHandler = require('./middleware/errorHandler');

dotenv.config();


app.use(cors());
app.use(express.json());

// Routes
app.use('/api/clients', clientRoutes);
app.use('/api/programs', programRoutes);

// Error handling middleware
app.use(errorHandler);

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(process.env.PORT || 5000, () =>
      console.log(`Server running on port ${process.env.PORT || 5000}`)
    );
  })
  .catch((err) => console.error('MongoDB connection error:', err));
