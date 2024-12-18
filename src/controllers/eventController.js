const { Event, Category } = require('../models');

const getAllEvents = async (req, res) => {
  try {
    const events = await Event.findAll({
      include: [Category]
    });
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createEvent = async (req, res) => {
  try {
    const event = await Event.create(req.body);
    res.status(201).json(event);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateEvent = async (req, res) => {
  try {
    const event = await Event.findByPk(req.params.id);
    if (!event) {
      return res.status(404).json({ error: 'Evenement non trouvé' });
    }
    await event.update(req.body);
    res.json(event);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteEvent = async (req, res) => {
  try {
    const event = await Event.findByPk(req.params.id);
    if (!event) {
      return res.status(404).json({ error: 'Evenement non trouvé' });
    }
    await event.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllEvents,
  createEvent,
  updateEvent,
  deleteEvent
};