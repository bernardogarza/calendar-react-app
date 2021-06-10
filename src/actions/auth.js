import Swal from 'sweetalert2';
import { fetchWithoutToken, fetchWithToken } from '../helpers/fetch';
import { types } from '../types/types';

export const startLogin = (email, password) => {
  return async (dispatch) => {
    const resp = await fetchWithoutToken('auth', { email, password }, 'POST');
    const body = await resp.json();

    if (body.ok) {
      localStorage.setItem('token', body.token);
      localStorage.setItem('token-init-date', new Date().getTime());
      dispatch(
        login({
          uid: body.uid,
          name: body.name,
        }),
      );
    } else {
      Swal.fire('Error', body.msg, 'error');
    }
  };
};

export const startSignup = (name, email, password) => {
  return async (dispatch) => {
    const resp = await fetchWithoutToken('auth/new', { email, password, name }, 'POST');
    const body = await resp.json();

    if (body.ok) {
      localStorage.setItem('token', body.token);
      localStorage.setItem('token-init-date', new Date().getTime());
      dispatch(
        login({
          uid: body.uid,
          name: body.name,
        }),
      );
    } else {
      showErrors(body);
    }
  };
};

export const startCheking = () => {
  return async (dispatch) => {
    const resp = await fetchWithToken('auth/renew');
    const body = await resp.json();

    if (body.ok) {
      localStorage.setItem('token', body.token);
      localStorage.setItem('token-init-date', new Date().getTime());

      dispatch(
        login({
          uid: body.uid,
          name: body.name,
        }),
      );
    } else {
      dispatch(checkingFinish());
    }
  };
};

export const startLogout = () => {
  return (dispatch, getState) => {
    getState().calendar.activeEvent = null;
    localStorage.clear();
    dispatch(logout());
  };
};

const logout = () => ({ type: types.authLogout });

const checkingFinish = () => ({ type: types.authCheckingFinish });

const login = (user) => ({
  type: types.authLogin,
  payload: user,
});

const showErrors = (body) => {
  const error_msg = body.errors ? Object.values(body.errors)[0].msg : body.msg;

  return Swal.fire('Error', error_msg, 'error');
};
