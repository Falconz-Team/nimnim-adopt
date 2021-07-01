import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button style={{backgroundColor: "transparent", border: 0, color: 'rgba(255, 235, 205)',
	textShadow: '#ccc0c86c', fontSize:'17px', marginTop:'4px', fontWeight: 'bold'}} onClick={() => loginWithRedirect()}>Log In</button>;
  
};

export default LoginButton;