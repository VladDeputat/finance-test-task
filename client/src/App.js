import { Redirect, Switch, Route } from 'react-router';
import TickersPage from './pages/tickersPage/TickersPage';

function App() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={TickersPage} />
        <Redirect to="/" />
      </Switch>
    </main>
  );
}

export default App;
