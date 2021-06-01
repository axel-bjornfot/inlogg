import { createContext, useState } from "react";

export const MemeContext = createContext();

const MemeProvider = (props) => {
  const [memes, setMemes] = useState(null);

  const getMemes = async () => {
    let memes = await fetch("/api/v1/memes");
    memes = await memes.json();
    setMemes(memes);
  };

  const values = {
    memes,
    setMemes,
    getMemes,
  };
  return (
    <MemeContext.Provider value={values}>{props.children}</MemeContext.Provider>
  );
};

export default MemeProvider;
