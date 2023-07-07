import React, { useState } from "react";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Animate2 from "../Animate2";

const LoginRegister = () => {
  const [haveAccount, setHaveAccount] = useState(true);

  const handleHaveAccount = (value) => {
    console.log("Value", value);
    setHaveAccount(value);
  };


  return (
    <Animate2>
    <div style={{marginBottom: 50 }}>
      
      {haveAccount ? (
        <Login
          handleHaveAccount={handleHaveAccount}
        />
      ) : (
        <Register
          handleHaveAccount={handleHaveAccount}
        />
      )}
    </div>
    </Animate2>
  );
};

export default LoginRegister;
