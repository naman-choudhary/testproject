import React, { useState } from "react";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Animate from "../Animate";

const LoginRegister = () => {
  const [haveAccount, setHaveAccount] = useState(true);

  const handleHaveAccount = (value) => {
    console.log("Value", value);
    setHaveAccount(value);
  };


  return (
    <Animate>
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
    </Animate>
  );
};

export default LoginRegister;
