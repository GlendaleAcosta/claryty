const Database = require('better-sqlite3');
const db = new Database('./healthdb_test.db', {fileMustExist: true});


exports.postAdverseEffects = (req, res) => {
  let drugName = req.body.drugName;
  // let year = req.body.year;

  drugName = drugName.toUpperCase();

  const query = db.prepare(`SELECT * FROM RXN_TEST
    INNER JOIN DRUG_TEST on RXN_TEST.drugId = DRUG_TEST.drugId
    AND DRUG_TEST.drugname = "${drugName}"
    ORDER BY  occurrences DESC LIMIT 10`);
  const rows = query.all();

  return res.json({ data: rows });
};
