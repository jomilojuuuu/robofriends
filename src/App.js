import "./index.css";
import CardList from "./CardList";
import { robot } from "./robot";
import SearchBox from "./SearchBox";

function App() {
  return (
    <div className="text-center">
      <h1>RoboFriends</h1>
      <SearchBox />
      <CardList robots={robot} />
    </div>
  );
}

export default App;
