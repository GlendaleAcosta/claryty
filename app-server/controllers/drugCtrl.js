const Database = require('better-sqlite3');
const db = new Database('./healthdb_test.db', {fileMustExist: true});


exports.postDrug = (req, res) => {
  let drugName = req.body.drugName;
  console.log(drugName);
  drugName = drugName.toUpperCase();

  const query = db.prepare(`SELECT * FROM DRUG2017 WHERE drugname = "${drugName}"`);
  const row = query.get();

  res.json({
    drugName: row.drugname,
    genericName: row.prod_ai,
    primaryid: row.primaryid,
  });
};
