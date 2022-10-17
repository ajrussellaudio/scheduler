import { Action, reducer } from './reducer';

describe('events reducer', () => {
  it('can add a recurring event', () => {
    const newEvent = {
      title: 'My first appointment',
      start: new Date('2018-06-12T19:30'),
      end: new Date('2018-06-12T20:30')
    };
    const action: Action = {
      type: 'ADD_EVENT',
      payload: newEvent
    };
    const state = reducer([], action);
    expect(state).toEqual([newEvent]);
  });
});
