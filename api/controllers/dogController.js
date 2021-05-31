const fetch = require("node-fetch");

const getDogs = async (req, res) => {
  let dogs = await fetch(`https://dog.ceo/api/breeds/image/random/15`);
  dogs = await dogs.json();
  res.json(dogs);
};

module.exports = {
  getDogs,
};
