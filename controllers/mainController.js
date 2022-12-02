const db = require('../database/models');
const { Op } = require('sequelize');
const sharp = require('sharp');
const crypto = require('crypto');
const generateFileName = (bytes = 32) => crypto.randomBytes(bytes).toString('hex');

module.exports={
  list: (req, res)=>{
    db.Actividad.findAll()
      .then(data => res.status(200).json(data))
  }
}