import { useState } from "react"; // react importacion libreria

// nombre del componente
function Nabvar() {
  const total = 25888;
  const token = false;

  return (
    <nav className="navbar">
      <button>Home</button>
      {token ? (
        <>
          <button>Profile</button>
          <button>Logout</button>
        </>
      ) : (
        <>
          <button>Login</button>
          <button>Register</button>
        </>
      )}
      <button>Total: ${total.toLocaleString()}</button>
    </nav>
  );
}

export default Nabvar;
