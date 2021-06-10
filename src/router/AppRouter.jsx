import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { startCheking } from '../actions/auth';
import Calendar from '../components/Calendar/Calendar';
import LoginScreen from '../components/LoginScreen/LoginScreen';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

const AppRouter = () => {
  const dispatch = useDispatch();
  const { checking, uid } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(startCheking());
  }, [dispatch]);

  if (checking) {
    return <h5>loading...</h5>;
  }
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <PublicRoute exact path="/login" component={LoginScreen} isAuthenticated={!!uid} />
            <PrivateRoute exact path="/" component={Calendar} isAuthenticated={!!uid} />
            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default AppRouter;
