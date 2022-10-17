import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { useEvents } from '../../context/Events';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

export type CalendarProps = Record<string, never>;

export const Calendar = () => {
  const { state: events } = useEvents();

  return (
    <BigCalendar
      localizer={localizer}
      defaultDate={new Date()}
      defaultView="month"
      events={events}
      style={{ height: '100vh' }}
    />
  );
};
