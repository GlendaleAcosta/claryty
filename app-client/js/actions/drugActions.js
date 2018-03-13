import axios from 'axios';
// import htmlToText from 'html-to-text';
// import wikipedia from 'wikipedia-js';

export function getTop10Reactions(year, drugName) {
  return axios.post('/api/reactions', {
    year,
    drugName,
  })
    .then((response) => {
      return {
        type: 'GET_10_REACTIONS',
        // payload: {
        //   top10Reactions: response.data,
        //   year,
        // },
        payload: response.data,
      };
    })
    .catch((error) => {
      console.error(error);
      return {
        type: 'ERROR',
        payload: null,
      };
    });
}

export function getDrugInfo(drugName) {
  return axios.post('/api/drug-info', {
    params: drugName,
  })
    .then((response) => {
      // console.log(response);
      const drugInfo = response.data.drugInfo.info;
      return {
        type: 'DRUG_INFO',
        payload: drugInfo,
      };
    })
    .catch((error) => {
      console.error(error);
      return {
        type: 'ERROR',
        payload: null,
      };
    });
}

// export function getDrugInfo(drugName) {
//   console.log(drugName);
//   return axios.get('https://en.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&format=jsonfm&titles=Adalimumab', {
//     headers: { 
//       Origin: 'localhost:3000',
//       Content-Type: 'application/json',
//       "charset=UTF-8"
//     },
//   })
//     .then((response) => {
//       console.log(response);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }
