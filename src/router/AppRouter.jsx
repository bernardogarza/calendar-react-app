import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Calendar from '../Calendar/Calendar';
import LoginScreen from '../LoginScreen/LoginScreen';

const AppRouter = () => {
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route exact path="/login" component={LoginScreen} />
            <Route exact path="/" component={Calendar} />
            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default AppRouter;
