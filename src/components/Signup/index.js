import React,{useState,useContext} from 'react';
import { FirebaseContext } from '../Firebase';
import { Link } from 'react-router-dom';

const Signup = (props) => {

  const {history} = props

  const firebase = useContext(FirebaseContext);

  const data = {
    pseudo: "",
    email: "",
    password: "",
    confpassword: "",
  };

  const [signInData, setSignInData] = useState(data);
  const [error, setError] = useState('');

  const handleChange = e =>
  {
    setSignInData({...signInData,[e.target.id]:e.target.value});
  }

  // Destructurer l'objet signInData
  const {pseudo,email,password,confpassword} = signInData;

  const btn =
    pseudo === "" || email === "" || password ==='' || password !== confpassword ? (
      <button disabled>Inscription</button>
    ) : (
      <button>Inscription</button>
    );
  
    const handleFormSubmit =(e)=>
    {
       e.preventDefault();
       const { email, password,pseudo} = signInData;
       firebase.signupUser(email, password)
        //  .then(authUser =>{
        //   return firebase.user(authUser.user.uid).set({
        //     pseudo,
        //     email
        //   })
        //  })
         .then( (user) => {          
           setSignInData({...data });
          //  redirection en react
           history.push('/welcome');
           console.log(user); 
         })
         .catch((error) => {
           setError(error);
           setSignInData({...data });
         });
    }

    // gestion des erreurs
    const errorMsg = error !=='' && <span>{error.message}</span>
    return (
      <div className="signUpLoginBox">
        <div className="slContainer">
          <div className="formBoxLeftSignup"></div>
          <div className="formBoxRight">
            <div className="formContent">
              {errorMsg}
              <h2>Inscription</h2>
              <form onSubmit={handleFormSubmit}>
                <div className="inputBox">
                  <input
                    onChange={handleChange}
                    value={pseudo}
                    autoFocus
                    id="pseudo"
                    type="text"
                    required
                    autoComplete="on"
                  />
                  <label htmlFor="pseudo">Pseudo</label>
                </div>
                <div className="inputBox">
                  <input
                    onChange={handleChange}
                    value={email}
                    id="email"
                    type="email"
                    required
                    autoComplete="on"
                  />
                  <label htmlFor="email">Email</label>
                </div>
                <div className="inputBox">
                  <input
                    onChange={handleChange}
                    value={password}
                    id="password"
                    type="password"
                    required
                  />
                  <label htmlFor="password">Mot de passe</label>
                </div>
                <div className="inputBox">
                  <input
                    onChange={handleChange}
                    value={confpassword}
                    id="confpassword"
                    type="password"
                    required
                  />
                  <label htmlFor="confpassword">
                    Confirmer le mot de passe
                  </label>
                </div>
                {btn}
              </form>
              <div className="linkContainer">
                 <Link className="simpleLink" to="/login">Déjà Inscrit? Connectez-vous</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
export default Signup
