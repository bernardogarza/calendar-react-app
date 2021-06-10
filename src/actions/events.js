import { fetchWithToken } from '../helpers/fetch';
import { prepareEvents } from '../helpers/prepareEvents';
import { types } from '../types/types';

export const eventStartAddNew = (event) => {
  return async (dispatch, getState) => {
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

export const eventEdit = (event) => ({
  type: types.eventEdit,
  payload: event,
});

export const eventDelete = () => ({
  type: types.eventDelete,
});

export const eventStartLoading = () => {
  return async (dispatch) => {
    try {
      const res = await fetchWithToken('events');
      const body = await res.json();
      const events = prepareEvents(body.events);
      dispatch(eventLoaded(events));
    } catch (error) {
      console.log(error);
    }
  };
};

const eventLoaded = (events) => ({
  type: types.eventLoaded,
  payload: events,
});
