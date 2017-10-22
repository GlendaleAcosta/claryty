const sqlite3 = require('sqlite3').verbose();


exports.postDrug = (req, res) => {
  const db = new sqlite3.Database('./results.db', ((err) => {
    if (err) {
      return console.error(err.message);
    }
  }));
  let drugName = req.body.params;
  drugName = drugName.toUpperCase();
  db.serialize(() => {
    db.get(`SELECT info FROM DRUGINFO WHERE drugname = "${drugName}";`,
      (err, drugInfo) => {
        console.log(drugInfo);
        res.json({ drugInfo });
      });
  });
  db.close();
};
