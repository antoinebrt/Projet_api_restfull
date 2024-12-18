const { Reservation, Event } = require('../models');

const createReservation = async (req, res) => {
  try {
    const event = await Event.findByPk(req.body.eventId);
    if (!event) {
      return res.status(404).json({ error: 'Evenement non trouvé' });
    }

    const reservation = await Reservation.create({
      ...req.body,
      userId: req.user.id
    });
    res.status(201).json(reservation);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const cancelReservation = async (req, res) => {
  try {
    const reservation = await Reservation.findOne({
      where: {
        id: req.params.id,
        userId: req.user.id
      }
    });

    if (!reservation) {
      return res.status(404).json({ error: 'Réservation non trouvé' });
    }

    reservation.status = 'cancelled';
    await reservation.save();
    res.json(reservation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createReservation,
  cancelReservation
};