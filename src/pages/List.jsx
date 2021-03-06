import { useEffect, useContext } from "react";
import { MemeContext } from "../context/MemeProvider";

import styles from "./css/List.module.css";

const List = () => {
  const { getMemes, memes } = useContext(MemeContext);

  useEffect(() => {
    getMemes();
  }, []);

  const renderMemes = () => {
    return memes.map((meme) => (
      <div className={styles.card} key={meme.id}>
        <h1>
          {meme.joke}
          {meme.setup} {meme.delivery}
        </h1>
      </div>
    ));
  };
  return <div className={styles.cardWrapper}>{memes && renderMemes()}</div>;
};

export default List;
