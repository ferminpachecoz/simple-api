const db = require('../database/models');

module.exports = {
  home: (req, res)=>{
    /* db.Actividad.findAll()
      .then(data => res.json(data)) */
      res.json({status: "sapeeee!"})
  }
}