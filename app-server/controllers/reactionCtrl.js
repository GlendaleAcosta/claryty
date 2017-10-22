const sqlite3 = require('sqlite3').verbose();

exports.postReaction = (req, res) => {
  const db = new sqlite3.Database('./results.db', ((err) => {
    if (err) {
      return console.error(err.message);
    }
  }));
  const year = req.body.year;
  let drugName = req.body.drugName;
  drugName = drugName.toUpperCase();
  if (
    drugName === 'HUMIRA' ||
    drugName === 'LYRICA' ||
    drugName === 'ELIQUIS' ||
    drugName === 'XELJANZ' ||
    drugName === 'OPDIVO' ||
    drugName === 'VIAGRA' ||
    drugName === 'CHANTIX' ||
    drugName === 'CIALIS' ||
    drugName === 'TRULICITY' ||
    drugName === 'PREVNAR' ||
    drugName === 'VIOXX'
  ) {
    db.serialize(() => {
      db.all(`SELECT * FROM TOPREAC${year} WHERE drugname = "${drugName}" ORDER BY count DESC;`, (err, result) => {
        if (err) {
          console.log(err);
        }
        if (result) {
          res.json({ top10Reactions: result });
        }
      });
    });
  } else {
    db.serialize(() => {
      db.all(`SELECT REAC${year}.pt, count(*) AS Count FROM REAC${year} JOIN DRUG${year} WHERE REAC${year}.primaryid = DRUG${year}.primaryid AND Drug${year}.drugname ='${drugName}' GROUP BY REAC${year}.pt ORDER BY count (*) DESC LIMIT 10;`, (err, top10Reactions) => {
        res.json({ top10Reactions });
      });
    });
  }

  db.close();
};
