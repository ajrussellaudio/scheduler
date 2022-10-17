import { EventsProvider } from './context/Events';
import { Calendar } from './components/Calendar';
import { Layout } from './components/Layout';
import { Controls } from './components/Controls';

export function App() {
  return (
    <EventsProvider>
      <Layout>
        <Controls />
        <Calendar />
      </Layout>
    </EventsProvider>
  );
}

export default App;
