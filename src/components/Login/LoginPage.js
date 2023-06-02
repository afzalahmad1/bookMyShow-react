import { useNavigate } from "react-router-dom";

import "./login.css";
import { useEffect, useState } from "react";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("userList"));
    setUsers(data);
  }, []);

  function signupPage() {
    navigate("/signup");
  }

  function userLogin(e) {
    e.preventDefault();
    /* users.forEach((user)=>{
        if(user.email === email && user.password ===password){
            setCurrentUser(user);
            setIsUser(true)
        }
    })*/

    if (email === users.email && password === users.password) {
      setMessage("login Successful");
      navigate("/fetch-data");
    } else {
      setMessage("Incorrect Email or Password");
    }
  }

  return (
    <div className="container-form">
      <form onSubmit={userLogin} id="login-form">
        <h1>Login</h1>

        <input
          type="email"
          value={email}
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          value={password}
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        {message && (
          <p
            style={{ color: message === "login Successful" ? "green" : "red" }}
          >
            {message}
          </p>
        )}

        <button type="submit" id="btn">
          Login
        </button>

        <button onClick={signupPage}>Goto Signup Page</button>
      </form>
    </div>
  );
};
export default LoginPage;
