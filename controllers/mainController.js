const db = require('../database/models');

module.exports={
  list: (req, res)=>{
    db.Actividad.findAll()
      .then(data => res.status(200).json(data))
  }
}