import moment from 'moment';
import { createContext, ReactNode, useContext, useReducer } from 'react';
import { Event as BigCalEvent } from 'react-big-calendar';
import { Action, reducer } from './reducer';

export type Event = BigCalEvent & {
  rrule?: string;
};

const EventsContext = createContext<
  { state: Event[]; dispatch: (action: Action) => void } | undefined
>(undefined);

type EventsProviderProps = {
  children: ReactNode;
};

const initialEvents: Event[] = [
  {
    start: moment().toDate(),
    end: moment().add(1, 'days').toDate(),
    title: 'Some title',
  },
  {
    start: moment().add(1, 'weeks').toDate(),
    end: moment().add(1, 'weeks').add(3, 'days').toDate(),
    title: 'Some other title',
  },
  {
    start: moment().toDate(),
    end: moment().add(1, 'hours').toDate(),
    title: 'A short meeting',
  },
];

export const EventsProvider = ({ children }: EventsProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialEvents);
  return <EventsContext.Provider value={{ state, dispatch }}>{children}</EventsContext.Provider>;
};

export const useEvents = () => {
  const context = useContext(EventsContext);

  if (!context) {
    throw new Error('useEvents must be used within an EventsProvider');
  }

  return context;
};
