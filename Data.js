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

const movieList = [
  {
    id: 1,
    name: "Interstellar",
    dateReleased: 2014,
    rate: 9,
  },
  {
    id: 2,
    name: "Batman: The Dark Knight",
    dateReleased: 2008,
    rate: 10,
  },
  {
    id: 3,
    name: "Cars",
    dateReleased: 2006,
    rate: 8,
  },
];

module.exports = { userList, movieList };
