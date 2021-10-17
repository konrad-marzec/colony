import Events from "./modules/events/components/Events";
import ColonyClientProvider from "./modules/colony";

function App() {
  return (
    <ColonyClientProvider>
      <Events />
    </ColonyClientProvider>
  );
}

export default App;
