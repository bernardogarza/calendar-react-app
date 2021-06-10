import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { startCheking } from '../actions/auth';
import Calendar from '../components/Calendar/Calendar';
import LoginScreen from '../components/LoginScreen/LoginScreen';

const AppRouter = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startCheking());
  }, [dispatch]);

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
