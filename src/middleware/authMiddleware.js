const jwt = require('jsonwebtoken');
const { User } = require('../models');

const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
      return res.status(401).json({error: 'Token manquant ou mal formaté'});
    }

    try{
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findByPk(decoded.id);

    if (!user || user.isActive === false) {
      return res.status(404).json({error: 'Utilisateur introuvable'});
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Token invalide ou expiré' });
  }
} catch (error){
  res.status(500).json({error : 'Erreur serveur, services indisponibles pour le moment'})
}
};

const isAdmin = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Accès refusé' });
  }
  next();
};

module.exports = { auth, isAdmin };