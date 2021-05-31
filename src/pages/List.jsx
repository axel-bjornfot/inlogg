import { useEffect, useContext } from "react";
import { DogContext } from "../context/DogProvider";

import styles from "./css/List.module.css";

const List = () => {
  const { getDogs, dogs } = useContext(DogContext);

  useEffect(() => {
    getDogs();
  });

  console.log(dogs);
  return <div className={styles.list}></div>;
};

export default List;
