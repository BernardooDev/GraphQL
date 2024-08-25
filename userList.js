const userList = [
  {
    id: 1,
    name: "Bernardo",
    username: "Becknardoo",
    age: 21,
    nationality: "Brazil",
    friends: [
      {
        id: 2,
        name: "Luana",
        username: "luelis",
        age: 21,
        nationality: "Germany",
      },
      {
        id: 3,
        name: "Pototo",
        age: 20,
        nationality: "India",
      },
    ],
  },
  {
    id: 2,
    name: "Luana",
    username: "luelis",
    age: 21,
    nationality: "Germany",
    friends: [
      {
        id: 1,
        name: "Bernardo",
        username: "Becknardoo",
        age: 21,
        nationality: "Brazil",
      },
    ],
  },
  {
    id: 3,
    name: "Pototo",
    age: 20,
    nationality: "India",
    friends: [
      {
        id: 1,
        name: "Bernardo",
        username: "Becknardoo",
        age: 21,
        nationality: "Brazil",
      },
    ],
  },
];

module.exports = { userList };
