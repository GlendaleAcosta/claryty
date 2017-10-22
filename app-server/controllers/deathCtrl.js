const sqlite3 = require('sqlite3').verbose();


exports.postDeath = (req, res) => {
  const db = new sqlite3.Database('./results.db', ((err) => {
    if (err) {
      return console.error(err.message);
    }
  }));
  let drugName = req.body.params;
  drugName = drugName.toUpperCase();
  db.serialize(() => {
    db.get('SELECT count(*) FROM OUTC04 JOIN DRUG04 WHERE OUTC04.ISR = DRUG04.ISR AND DRUG04.drugname = "VIOXX" AND OUTC04.OUTC_COD = "DE";',
      (err, numerator) => {
        db.get('SELECT count(*\') FROM OUTC04 JOIN DRUG04 WHERE OUTC04.ISR = DRUG04.ISR AND DRUG04.drugname = "VIOXX"', (err, denominator) => {
          if (err) { console.log(err); }
          const percentage = (numerator / denominator) * 100;
          res.json({ percentage });
        });
      });
  });
  db.close();
};
