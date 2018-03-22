// Sort drugs in order from A - Z
// Iterate through each drug (N)
//    if drug exists in DRUG_TEST Table ::::: [1]
//        Get drugId
//    else if drug DOES NOT exist in DRUG_TEST table
//        Create drugId in DRUG_TEST Table
//    Get Reactions from each drug (N) ::::::::: [2]
//        Get reactions from REACTION_TEST based on drugId
//        if reaction exists in REACTION_TEST TABLE
//            increment occurrences by 1
//        else if reaction does NOT exist in REACTION_TEST TABLE
//            create reaction with drugId
//            set occurrences to equal 1
//

// Query top 10 REACTIONS_TEST based on drugId

const Database = require('better-sqlite3');
const db = new Database('healthpp.db');
db.pragma('journal_mode = WAL');

let i = 0;
async function doEverything() {
  let limit = 1000;
  let offset = 0;
  for (limit, offset; limit <= 2425883; limit += 1000, offset += 1000) {
    await processArray(limit, offset);
  }
}

async function processArray(limit, offset) {
  // console.log('processing array');
  const stmt = db.prepare(`SELECT * FROM DRUG_SPACE LIMIT ${limit} OFFSET ${offset}`);
  const drugs = stmt.all();

  let lastDrug = '8==D';
  let r = {};
  await handleDrugs(drugs);
}


async function handleDrugs(drugs) {
  // n
  for (let drug of drugs) {
    i++;
    console.log(`${i} / 2425883`);
    console.log(drug.drugname);
    const stmt3 = db.prepare(`SELECT drugid FROM DRUG_TEST WHERE drugname = "${drug.drugname}"`);
    const row = stmt3.get();
    let drugId;
    if (typeof row !== 'undefined') {
      drugId = row.drugId;
    } else {
      const addDrug = db.prepare(`INSERT INTO DRUG_TEST (drugname) VALUES ("${drug.drugname}")`);
      addDrug.run();
      const stmt4 = db.prepare(`SELECT drugid FROM DRUG_TEST WHERE drugname = "${drug.drugname}"`);
      const row = stmt3.get();
      drugId = row.drugId;
    }
    const reactions = await getReactions(drug, drugId);
    await handleReactions(reactions, drug, drugId);
  }
}


async function handleReactions(reactions, drug, drugId){
  for(let rxn of reactions) {

    const stmt5 = db.prepare(`SELECT * FROM RXN_TEST where drugId = ${drugId} AND reaction = "${rxn.pt}"`);
    const row = stmt5.get();

    if (typeof row !== 'undefined') {
      const stmt6 = db.prepare(`UPDATE RXN_TEST SET occurrences = ${row.occurrences + 1} WHERE drugId = ${drugId} AND reaction = "${rxn.pt}"`);
      stmt6.run();
    } else {
      const stmt7 = db.prepare(`INSERT INTO RXN_TEST (drugId, reaction, occurrences) VALUES (${drugId}, "${rxn.pt}", 1)`);
      stmt7.run();
    }
  }
}
async function getReactions(drug, drugId){
  const stmt2 = db.prepare(`SELECT * FROM REAC2017 where caseid=${drug.caseid}`);
  const reactions = stmt2.all();
  return reactions;
}

doEverything();
