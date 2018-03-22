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

  // n
  for (let drug of drugs) {
    i++;
    console.log(`${i} / 2425883`);
    if (drug.drugname === lastDrug || lastDrug === '8==D') {
        lastDrug = drug.drugname;
        await delayedItem(drug, r);
    } else {
        // const top10 = await getTop10Reactions(r);
        // await insertToDB(top10, lastDrug);
        // await resetR(r);
        await delayedItem(drug, r);
        lastDrug = drug.drugname;
    }
  }
}


async function delayedItem (d, r){
  const stmt2 = db.prepare(`SELECT * FROM REAC2017 where caseid=${d.caseid}`);
  const reactions = stmt2.all();
  for(let react of reactions) {
    await moreShiet(react, r);
  }
}
