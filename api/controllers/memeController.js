const fetch = require("node-fetch");

const getMemes = async (req, res) => {
  let memes = await fetch(`https://v2.jokeapi.dev/joke/Programming?amount=10`);
  memes = await memes.json();
  res.json(memes.jokes);
};

module.exports = {
  getMemes,
};
