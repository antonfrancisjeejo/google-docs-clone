import TextEditor from "./components/TextEditor";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import { v4 as uuidV4 } from "uuid";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/documents/:id" exact component={TextEditor} />
        <Route path="/" exact>
          <Redirect to={`/documents/${uuidV4()}`} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
