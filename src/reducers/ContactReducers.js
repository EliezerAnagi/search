let initialStore = {
  contacts: [
    {
      name: "RICK",
      phone: "0203445566",
      location: "Accra",
      id: "1659431731207",
    },
    {
      name: "DANNY",
      phone: "0203445566",
      location: "Accra",
      id: "1659431734534",
    },
  ],
};

let ContactReducer = (state = initialStore, action) => {
  return state;
};

export default ContactReducer;
