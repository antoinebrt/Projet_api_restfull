const User = require('./User');
const Event = require('./Event');
const Reservation = require('./Reservation');
const Category = require('./Category');

Event.belongsTo(Category);
Category.hasMany(Event);

Event.belongsToMany(User, { through: Reservation });
User.belongsToMany(Event, { through: Reservation });

Reservation.belongsTo(User);
Reservation.belongsTo(Event);

module.exports = {
  User,
  Event,
  Reservation,
  Category
};