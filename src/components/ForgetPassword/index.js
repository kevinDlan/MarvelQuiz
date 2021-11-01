import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FirebaseContext } from "../Firebase";

const ForgetPassword = (props) => {
  const firebase = useContext(FirebaseContext);

  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [emailSendMsg, setEmailSendMsg] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    firebase
      .resetPassword(email)
      .then(() => {
        setError(null);
        setEmailSendMsg(
          `Consulter votre mail :${email}  pour changer le mot de passe !`
        );
        setEmail("");
        setTimeout(()=>{
           props.history.push('/login');
        },5000)
      })
      .catch((error) => {
        setError(error);
        setEmail('')
      });
  };
  const disable = email === "";

  console.log(email);
  return (
    <div className="signUpLoginBox">
      <div className="slContainer">
        <div className="formBoxLeftForget"></div>
        <div className="formBoxRight">
          <div className="formContent">
            {error && <span>{error.message}</span>}
            {emailSendMsg && (
              <span
                style={{
                  border: "1px solid green",
                  background: "green",
                  color: "#ffffff",
                }}
              >
                {emailSendMsg}
              </span>
            )}
            <h2>Mot de passe Oublier</h2>
            <form onSubmit={handleSubmit}>
              <div className="inputBox">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  autoFocus
                  id="email"
                  type="email"
                  required
                  autoComplete="off"
                />
                <label htmlFor="eamil">Email</label>
              </div>
              <button disabled={disable}>Récupérer</button>
            </form>
            <div className="linkContainer">
              <Link className="simpleLink" to="/login">
                Déjà inscrit ? connectez-vous.
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
