require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const authRoutes = require('./routes/auth');
const eventRoutes = require('./routes/events');
const reservationRoutes = require('./routes/reservations');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/reservations', reservationRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Une erreur est survenue!' });
});

const PORT = process.env.PORT ;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Le serveur tourne !`);
  });
});