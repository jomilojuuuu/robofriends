import "./index.css";
import CardList from "./CardList";
import { robot } from "./robot";

function App() {
  return (
    <div>
      <CardList robots={robot} />
    </div>
  );
}

export default App;
