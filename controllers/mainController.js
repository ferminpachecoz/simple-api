const db = require('../database/models');
const { uploadFile, deleteFile, getObjectSignedUrl } = require('../s3.js');
const crypto = require('crypto');
const generateFileName = (bytes = 32) => crypto.randomBytes(bytes).toString('hex')

module.exports={
  list: (req, res)=>{
    db.Actividad.findAll()
      .then(data => res.status(200).json(data))
  },
  addImage: async (req, res)=>{
    const file = req.file
    const imageName = generateFileName()

    await uploadFile(file.buffer, imageName, file.mimetype)

    await db.Image.create({
      title: req.body.title,
      image: imageName,
      id_category: req.body.id
    })
      .then(async data =>{
        data.dataValues.image = await getObjectSignedUrl(data.dataValues.image)
        res.status(200).json(data)
      })
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