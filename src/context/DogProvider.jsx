import { createContext, useState } from "react";

export const DogContext = createContext();

const DogProvider = (props) => {
  const [dogs, setDogs] = useState(null);

  const getDogs = async () => {
    let dogs = await fetch("/api/v1/dogs");
    dogs = await dogs.json();
    setDogs(dogs);
  };

  const values = {
    dogs,
    setDogs,
    getDogs,
  };
  return (
    <DogContext.Provider value={values}>{props.children}</DogContext.Provider>
  );
};

export default DogProvider;
