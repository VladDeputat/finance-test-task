import { Redirect, Switch, Route } from "react-router";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Redirect to="/" />
      </Switch>
    </main>
  );
}

export default App;
