import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import './form.css'

const FormData = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const u = JSON.parse(localStorage.getItem("userList"));
    setUser(u);
  }, []);

  const location = useLocation();
  //console.log(location.state.name)
  return (
    <div>
      <div className="ticket-details">
      <div className="ticket">
        <p>
          <strong>User Name</strong> : {user.fullName}
        </p>
        <p>
          <strong>Show Name</strong> : {location.state.name}
        </p>
        <p>
          <strong>Premier</strong> : {location.state.premiered}
        </p>
        <p>
          <strong>Language</strong> : {location.state.language}
        </p>
        <p>
          <strong>Status</strong> : {location.state.status}
        </p>
        <p>
          <strong>Runtime</strong> : {location.state.runtime}
        </p>
      </div>
    </div>
  
    </div>
  );
};
export default FormData;
