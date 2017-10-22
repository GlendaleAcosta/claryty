export default function reducer(state = {
  top10Reactions: null,
  drugInfo: null,
}, action) {
  switch (action.type) {
    case 'GET_10_REACTIONS': {
      return { ...state, top10Reactions: action.payload.top10Reactions };
    }
    case 'DRUG_INFO': {
      return { ...state, drugInfo: action.payload };
    }
    default: return state;
  }
}
