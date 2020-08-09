export const createReducer = (initialState, reduxerMap) => (state = initialState, action) => {
    const reducer = reduxerMap[action.type];

    return reducer
        ? reducer(state, action.payload)
        : state;
};
