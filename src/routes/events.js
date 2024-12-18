const express = require('express');
const { auth, isAdmin } = require('../middleware/auth');
const {
  getAllEvents,
  createEvent,
  updateEvent,
  deleteEvent
} = require('../controllers/eventController');

const router = express.Router();

router.get('/', getAllEvents);
router.post('/', auth, isAdmin, createEvent);
router.put('/:id', auth, isAdmin, updateEvent);
router.delete('/:id', auth, isAdmin, deleteEvent);

module.exports = router;