import React from "react";

import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import styles from "./Home.module.css";

const Home = (props) => {
  return (
    <Card className={styles.home}>
      <h1>Рады Вас Видеть Снова!</h1>
      <Button onClick={props.onLogout}>Exit</Button>
    </Card>
  );
};

export default Home;
