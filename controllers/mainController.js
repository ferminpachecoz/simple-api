const db = require('../database/models');
const { Op } = require('sequelize');
const { uploadFile, deleteFile, getObjectSignedUrl } = require('../s3.js');
const sharp = require('sharp');
const crypto = require('crypto');
const generateFileName = (bytes = 32) => crypto.randomBytes(bytes).toString('hex');

module.exports={
  list: (req, res)=>{
    db.Actividad.findAll()
      .then(data => res.status(200).json(data))
  },
  getImages: (req, res) =>{
    db.Image.findAll({include: [{association: "images"}]})
    .then(async data =>{
      for (let item of data){
        item.dataValues.image = await getObjectSignedUrl(item.dataValues.image)
      }
      res.status(200).json(data)
    })
  }
}