import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button style={{backgroundColor: "transparent", color: 'rgb(255, 235, 205)',
    textShadow: '#ccc0c86c', fontSize:'17px', marginTop:'4px'}} onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </button>
  );
};

export default LogoutButton;