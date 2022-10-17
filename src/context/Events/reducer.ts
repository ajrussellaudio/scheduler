import { Event } from './Events';

export type Action = {
  type: 'ADD_EVENT';
  payload: Event;
};

export function reducer(state: Event[], action: Action) {
  if (action.type === 'ADD_EVENT') {
    return [...state, action.payload];
  }
  return state;
}
