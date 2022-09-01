let initialState = {
  users: [
    { name: "Rick", email: "rick@gmail.com", gen: 22, id: "1659431731207" },
    { name: "Danny", email: "danny@gmail.com", gen: 25, id: "1659431734534" },
  ],
};

let UsersReducers = (state = initialState, action) => {
  return state;
};

export default UsersReducers;
