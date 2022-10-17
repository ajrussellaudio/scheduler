import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

import './App.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

export function App() {
  const events = [
    {
      start: moment().toDate(),
      end: moment().add(1, 'days').toDate(),
      title: 'Some title'
    },
    {
      start: moment().add(1, 'weeks').toDate(),
      end: moment().add(1, 'weeks').add(1, 'days').toDate(),
      title: 'Some other title'
    }
  ];

  return (
    <div className="App">
      <Calendar
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={events}
        style={{ height: '100vh' }}
      />
    </div>
  );
}

export default App;
