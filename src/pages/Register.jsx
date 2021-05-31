import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../context/UserProvider";
import styles from "./css/Register.module.css";

const RegisterUser = () => {
  const history = useHistory();
  const { register } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let userToRegister = {
      email,
      password,
    };

    let result = await register(userToRegister);
    console.log(result);
    if (result.success) {
      history.push("/");
    }
  };

  return (
    <div className={styles.card}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <p>Email</p>
        <input
          className={styles.inputField}
          type='text'
          placeholder='Email'
          value={email}
          onChange={handleEmailChange}
        />
        <p>Password</p>
        <input
          className={styles.inputField}
          type='password'
          placeholder='password'
          value={password}
          onChange={handlePasswordChange}
        />
        <br />
        <button type='submit' className={styles.btn}>
          Create new user
        </button>
      </form>
    </div>
  );
};

export default RegisterUser;
