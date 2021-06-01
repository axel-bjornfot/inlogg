import { NavLink, useHistory } from "react-router-dom";
import { UserContext } from "../context/UserProvider";
import { useContext, useEffect } from "react";
import styles from "./css/Navbar.module.css";

const Navbar = () => {
  const { logout, whoami, user } = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    whoami();
  }, []);

  const handleSubmit = async () => {
    let result = await logout();
    console.log(result);
    if (result.success) {
      history.push("/");
      window.location.reload();
    }
  };

  return (
    <nav className={styles.navbar}>
      {user !== null ? (
        <>
          <NavLink className={styles.link} exact to='/List'>
            List
          </NavLink>
          <span onClick={handleSubmit} className={styles.link}>
            Logout
          </span>
        </>
      ) : (
        <NavLink to='/' className={styles.link}>
          Login
        </NavLink>
      )}
    </nav>
  );
};

export default Navbar;
