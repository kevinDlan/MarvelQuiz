import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Errors from '../Errors';
import Footer from '../Footer';
import Header from '../Header';
import Landing from '../Landing';
import Login from '../Login';
import Signup from '../Signup';
import Welcome from '../Welcome';
import ForgetPassword from '../ForgetPassword';


function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/welcome" component={Welcome} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/forgetpassword" component={ForgetPassword}/>
        <Route component={Errors} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
