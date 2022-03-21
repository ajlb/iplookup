const router = require("express").Router();
// const db = require("../models");
const Reader = require ('@maxmind/geoip2-node').Reader;

router.get("/geo", (req, res) => {
  const validIP = req.query.q;
  Reader.open('./db/GeoIP/GeoLite2-City.mmdb')
    .then(reader => { 
      const data = reader.city(validIP);
      var detail = new Object();
      detail.lat = data.location.latitude;
      detail.long = data.location.longitude;
      return res.json(detail)
    })
    .catch(err => console.log(err));
});

module.exports = router;
