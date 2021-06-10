import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { startLogin, startSignup } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';
import './LoginScreen.css';

const LoginScreen = () => {
  const [formLoginValues, handleLoginInputChange] = useForm({
    loginEmail: 'test@mail.com',
    loginPassword: '123456',
  });

  const { loginEmail, loginPassword } = formLoginValues;

  const [formSignUpValues, handleSignUpInputChange] = useForm({
    signupName: '',
    signupEmail: '',
    signupPassword1: '',
    signupPassword2: '',
  });

  const { signupName, signupEmail, signupPassword1, signupPassword2 } = formSignUpValues;

  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(startLogin(loginEmail, loginPassword));
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    if (signupPassword1 !== signupPassword2) {
      return Swal.fire('Error', "Passwords doesn't match", 'error');
    }
    dispatch(startSignup(signupName, signupEmail, signupPassword1));
  };

  return (
    <div>
      <div className="container login-container">
        <div className="row">
          <div className="col-md-6 login-form-1">
            <h3>Log In</h3>

            <form onSubmit={handleLogin}>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="loginEmail"
                  value={loginEmail}
                  onChange={handleLoginInputChange}
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  name="loginPassword"
                  value={loginPassword}
                  onChange={handleLoginInputChange}
                />
              </div>

              <div className="form-group">
                <input type="submit" className="btnSubmit" value="Login" />
              </div>
            </form>
          </div>

          <div className="col-md-6 login-form-2">
            <h3>Sign Up</h3>

            <form onSubmit={handleSignUp}>
              <div className="form-group">
                <label className="signup-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="signupName"
                  value={signupName}
                  onChange={handleSignUpInputChange}
                />
              </div>

              <div className="form-group">
                <label className="signup-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="signupEmail"
                  value={signupEmail}
                  onChange={handleSignUpInputChange}
                />
              </div>

              <div className="form-group">
                <label className="signup-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  name="signupPassword1"
                  value={signupPassword1}
                  onChange={handleSignUpInputChange}
                />
              </div>

              <div className="form-group">
                <label className="signup-label">Password Confirmation</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password Confirmation"
                  name="signupPassword2"
                  value={signupPassword2}
                  onChange={handleSignUpInputChange}
                />
              </div>

              <div className="form-group">
                <input type="submit" className="btnSubmit" value="Sign Up" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
