import React from "react";
import logo from "../assets/logo.png";
const Navbar = () => {
  const NavItem = ["Market", "Exchange", "Tutorials", "Wallets"];
  return (
    <nav>
      <img
        src={logo}
        alt="logo"
        style={{ height: "43px", marginRight: "48%" ,cursor:"pointer"}}
      />
    
      {NavItem.map((item,index) => (
        <div key={index}
          style={{ display: "flex", width: "6%", cursor: "pointer" }}
          className="navitems"
        >
          <h4>{item}</h4>
        </div>
      ))}
      <div
        style={{
          color: "black",
          backgroundColor: "white",
          width: "90px",
          height: "30px",
          borderRadius: "20px",
          marginTop: "-3px",
          cursor: "pointer",
          marginRight:"110px",
          
        }}
        className="login"
      >
        <p
          style={{
            textAlign: "center",
            marginTop: "4px",
          }}
        >
          <strong>Login</strong>
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
