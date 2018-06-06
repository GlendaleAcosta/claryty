// const sqlite3 = require('sqlite3').verbose();
const Database = require('better-sqlite3');
const db = new Database('./healthdb_test.db', {fileMustExist: true});

exports.postReaction = (req, res) => {
  console.log('calling reaction control');
  // const db = new sqlite3.Database('./results.db', ((err) => {
  //   if (err) {
  //     return console.error(err.message);
  //   }
  // }));
  // const year = req.body.year;
  // let drugName = req.body.drugName;
  // // let drugName = 'humira';
  // drugName = drugName.toUpperCase();
  // if (
  //   drugName === 'HUMIRA' ||
  //   drugName === 'LYRICA' ||
  //   drugName === 'ELIQUIS' ||
  //   drugName === 'XELJANZ' ||
  //   drugName === 'OPDIVO' ||
  //   drugName === 'VIAGRA' ||
  //   drugName === 'CHANTIX' ||
  //   drugName === 'CIALIS' ||
  //   drugName === 'TRULICITY' ||
  //   drugName === 'PREVNAR' ||
  //   drugName === 'VIOXX'
  // ) {
  //   db.serialize(() => {
  //     console.log('we are looking 1');
  //     db.all(`SELECT * FROM TOPREAC${year} WHERE drugname = "${drugName}" ORDER BY count DESC;`, (err, result) => {
  //       if (err) {
  //         console.log(err);
  //       }
  //       if (result) {
  //         console.log(result);
  //         res.json({ top10Reactions: result });
  //       }
  //     });
  //   });
  // } else {
  //   console.log('we are looking 2');
  //   db.serialize(() => {
  //     db.all(`SELECT REAC${year}.pt, count(*) AS Count FROM REAC${year} JOIN DRUG${year} WHERE REAC${year}.primaryid = DRUG${year}.primaryid AND Drug${year}.drugname ='${drugName}' GROUP BY REAC${year}.pt ORDER BY count (*) DESC LIMIT 10;`, (err, top10Reactions) => {
  //       res.json({ top10Reactions });
  //       console.log(top10Reactions);
  //     });
  //   });
  // }
  //
  // db.close();
};
