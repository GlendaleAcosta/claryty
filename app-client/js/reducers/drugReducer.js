export default function reducer(state = {
  top10Reactions: null,
  drugInfo: null,
  // year: 15,
}, action) {
  switch (action.type) {
    case 'GET_10_REACTIONS': {
      return {
        ...state,
        top10Reactions: action.payload.top10Reactions,
        // year: action.payload.year,
      };
    }
    case 'DRUG_INFO': {
      return { ...state, drugInfo: action.payload };
    }
    default: return state;
  }
}
