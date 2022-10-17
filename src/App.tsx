import { EventsProvider } from './context/Events';
import { Calendar } from './components/Calendar';

export function App() {
  return (
    <EventsProvider>
      <Calendar />
    </EventsProvider>
  );
}

export default App;
