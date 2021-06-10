import Swal from 'sweetalert2';
import { fetchWithToken } from '../helpers/fetch';
import { prepareEvents } from '../helpers/prepareEvents';
import { types } from '../types/types';

export const eventStartAddNew = (event) => async (dispatch, getState) => {
  const { uid, name } = getState().auth;
  try {
    const res = await fetchWithToken('events', event, 'POST');
    const body = await res.json();

    console.log(body);

    if (body.ok) {
      event.id = body.savedEvent.id;
      event.user = {
        _id: uid,
        name: name,
      };
      console.log(event);
      dispatch(eventAddNew(event));
    }
  } catch (error) {
    console.log(error);
  }
};

const eventAddNew = (event) => ({
  type: types.eventAddNew,
  payload: event,
});

export const eventSetActive = (event) => ({
  type: types.eventSetActive,
  payload: event,
});

export const eventCleanActive = () => ({
  type: types.eventCleanActive,
});

export const eventStartEdit = (event) => async (dispatch) => {
  try {
    const res = await fetchWithToken(`events/${event.id}`, event, 'PUT');
    const body = await res.json();
    if (body.ok) {
      dispatch(eventEdit(event));
    } else {
      Swal.fire('Error', body.msg, 'error');
    }
  } catch (error) {
    console.log(error);
  }
};

const eventEdit = (event) => ({
  type: types.eventEdit,
  payload: event,
});

export const eventStartDelete = () => async (dispatch, getState) => {
  const { id } = getState().calendar.activeEvent;
  try {
    const res = await fetchWithToken(`events/${id}`, {}, 'DELETE');
    const body = await res.json();
    if (body.ok) {
      dispatch(eventDelete());
    } else {
      Swal.fire('Error', body.msg, 'error');
    }
  } catch (error) {
    console.log(error);
  }
};

const eventDelete = () => ({
  type: types.eventDelete,
});

export const eventStartLoading = () => async (dispatch) => {
  try {
    const res = await fetchWithToken('events');
    const body = await res.json();
    const events = prepareEvents(body.events);
    dispatch(eventLoaded(events));
  } catch (error) {
    console.log(error);
  }
};

const eventLoaded = (events) => ({
  type: types.eventLoaded,
  payload: events,
});
