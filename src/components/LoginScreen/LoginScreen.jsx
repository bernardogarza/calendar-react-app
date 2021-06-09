import { useForm } from '../../hooks/useForm';
import './LoginScreen.css';

const LoginScreen = () => {
  const [formLoginValues, handleLoginInputChange] = useForm({
    loginEmail: 'bernardo@mail.com',
    loginPassword: '123456',
  });

  const { loginEmail, loginPassword } = formLoginValues;

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(formLoginValues);
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
                  type="text"
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

            <form>
              <div className="form-group">
                <label className="signup-label">Name</label>
                <input type="text" className="form-control" placeholder="Name" />
              </div>

              <div className="form-group">
                <label className="signup-label">Email</label>
                <input type="email" className="form-control" placeholder="Email" />
              </div>

              <div className="form-group">
                <label className="signup-label">Password</label>
                <input type="password" className="form-control" placeholder="Password" />
              </div>

              <div className="form-group">
                <label className="signup-label">Password Confirmation</label>

                <input
                  type="password"
                  className="form-control"
                  placeholder="Password Confirmation"
                />
              </div>

              <div className="form-group">
                <input type="submit" className="btnSubmit" value="Crear cuenta" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
