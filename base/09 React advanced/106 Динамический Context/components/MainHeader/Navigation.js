import React, {useContext} from "react";
import styles from "./Navigation.module.css";
import AuthContext from '../../contexts/AuthContext';

const Navigation = (props) => {
  const ctx = useContext(AuthContext);
  console.log(ctx);
  return (
    <nav className={styles.nav}>
      <ul>
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Пользователи</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Админ</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <button onClick={props.onLogout}>Выйти</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
