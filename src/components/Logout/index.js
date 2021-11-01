import React, { useState, useEffect,useContext } from "react";
import { FirebaseContext } from "../Firebase";

const Logout = ()=>{

    const firebase = useContext(FirebaseContext);
    // const {history} = props;
    const [checked, setchecked] = useState(false);
    useEffect(() => {
      if (checked) {
          firebase.signoutUser();
        //   history.push("/");
      }
    }, [checked, firebase]);

    const handleChange = (event)=>{
        setchecked(event.target.checked);    
    }
    return (
      <div className="logoutContainer">
        <label className="switch">
          <input onChange={handleChange} checked={checked} type="checkbox" />
          <span className="slider round"></span>
        </label>
      </div>
    );
}

export default Logout
