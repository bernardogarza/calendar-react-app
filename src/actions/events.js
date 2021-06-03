import { types } from '../types/types';

export const eventAddNew = (event) => ({
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
