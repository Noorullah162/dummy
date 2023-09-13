const reducer = (state = "Dummy Name", action) => {
    if(action.type === "NAME")
    return state;
};

export default reducer;