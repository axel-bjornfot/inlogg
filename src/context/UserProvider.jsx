import { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = (props) => {
  const [user, setUser] = useState(null);

  const whoami = async () => {
    let user = await fetch("/api/v1/users/whoami");
    user = await user.json(user);
    setUser(user);
  };

  const login = async (userToLogin) => {
    let result = await fetch("/api/v1/users/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userToLogin),
    });
    result = await result.json(userToLogin);
    return result;
  };

  const logout = async () => {
    let result = await fetch("/api/v1/users/logout");
    result = await result.json(result);
    return result;
  };

  const register = async (userToRegister) => {
    let result = await fetch("/api/v1/users/register", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userToRegister),
    });
    result = await result.json(userToRegister);
    return result;
  };

  const values = {
    login,
    register,
    whoami,
    user,
    setUser,
    logout,
  };

  return (
    <UserContext.Provider value={values}>{props.children}</UserContext.Provider>
  );
};
export default UserProvider;
