import React, { Fragment, useContext, useEffect, useState } from "react";
import { FirebaseContext } from "../Firebase";
import Logout from '../Logout'
import Quiz from '../Quiz'

const Welcome = (props) => {

    const [userSession, setuserSession] = useState(null);
    const firebase = useContext(FirebaseContext);

    useEffect( ()=>{
      let listener =  firebase.auth.onAuthStateChanged( user => user ? setuserSession(user) : props.history.push('/'))
       return ()=>{
           listener();
       }
    },[])
    
    return userSession === null ? (
      <Fragment>
        <div className="loader"></div>
        <p className="loaderText"></p>
      </Fragment>
    ) : (
      <div className="quiz-bg">
        <div className="container">
          <Logout />
          <Quiz />
        </div>
      </div>
    );
}

export default Welcome
