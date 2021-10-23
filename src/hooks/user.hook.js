import { useState } from "react";

const useUserState = () => {
  // set init value of user state
  const [user, setUser] = useState(() => {
    const user = localStorage.getItem("user");

    return user ? user : false;
  });

  const setUserState = (value) => {
    const valueToStore = value instanceof Function ? value(user) : value;

    setUser(valueToStore);
  };

  return [user, setUserState];
};

export default useUserState;
