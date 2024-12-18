const express = require('express');
const { auth } = require('../middleware/auth');
const {
  createReservation,
  cancelReservation
} = require('../controllers/reservationController');

const router = express.Router();

router.post('/', auth, createReservation);
router.put('/:id/cancel', auth, cancelReservation);

module.exports = router;