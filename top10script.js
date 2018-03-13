// const sqlite3 = require('sqlite3').verbose();
// const db = new sqlite3.Database('./healthpp.db', ((err) => {
//   if (err) {
//     return console.error(err.message);
//   }
// }));
const MaxHeap = require('heap-min-max').MaxHeap;
const Database = require('better-sqlite3');
const db = new Database('healthpp.db');
db.pragma('journal_mode = WAL');
let i = 0;
async function doEverything() {
  let limit = 1000;
  let offset = 0;
  for(limit, offset; limit <= 2425883; limit += 1000, offset += 1000) {
    await processArray(limit, offset);
  }
}


async function processArray(limit, offset) {
  // console.log('processing array');
  const stmt = db.prepare(`SELECT * FROM DRUG_SPACE LIMIT ${limit} OFFSET ${offset}`);
  const drugs = stmt.all();

  let lastDrug = '8==D';
  let r = {};

  for(let drug of drugs) {
    i++;
    console.log(`${i} / 2425883`);
    if (drug.drugname === lastDrug || lastDrug === '8==D') {
        lastDrug = drug.drugname;
        await delayedItem(drug, r);
    } else {
        const top10 = await getTop10Reactions(r);
        await insertToDB(top10, lastDrug);
        await resetR(r);
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

async function moreShiet(react, r) {
  if (!r[react.pt]) {
    r[react.pt] = 1;
  } else {
    r[react.pt] += r[react.pt];
  }
}


async function getTop10Reactions(r) {
  let maxHeap = new MaxHeap();
  let arr = [];
  // console.log(r);
  for(var key in r) {
    maxHeap.push(r.key, key);
  }
  for (let j = 0; j < 10; j++) {
    const kay = maxHeap.pop();
    if (typeof kay !== 'undefined') {
      arr.push({
        adverseEffect: kay[1],
        occurrences: r[kay[1]],
      });
    }
  }
  return arr;
}

async function insertToDB(top10, drugname) {
  let max = 10;
  if (top10.length < 10)
    max = top10.length;
  for(let z = 0; z < max; z++) {

    const AE = top10[z].adverseEffect
    const occ = top10[z].occurrences
    const num = z + 1;
    const stmt3 = db.prepare(`
      INSERT INTO TOP10REACTIONS2017
      (drugname, adverse_effect ,occurrences, rank)
      VALUES ("${drugname}" , "${AE}" , "${occ}", ${num})
    `);
    stmt3.run();
  }
}

async function resetR(r) {
  r = {};
}

doEverything();
