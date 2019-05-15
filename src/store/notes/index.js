const TYPE = 'TYPE';

const initialState = {
  notes: [],
};

const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPE:
      return { ...state, events: action.payload };
    default:
      return state;
  }
};

export default eventsReducer;
