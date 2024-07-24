import "./index.css";
import Card from "./Card";
import { robot } from "./robot";

function App() {
  return (
    <div className="grid grid-cols-4 gap-4">
      <Card id={robot[0].id} name={robot[0].name} email={robot[0].email} />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default App;
