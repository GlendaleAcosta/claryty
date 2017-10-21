export default function reducer(state = {
  drug: null,
}, action) {
  switch (action.type) {
    case 'GET_DRUG': {
      return { ...state, drug: action.payload };
    }
    default: return state;
  }
}
