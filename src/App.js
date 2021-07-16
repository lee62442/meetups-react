import { Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";

import AllMeetupsPage from "./pages/AllMeetUps";
import FavoritePage from "./pages/Favorites";
import NewMeetupsPage from "./pages/NewMeetUps";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllMeetupsPage />
        </Route>
        <Route path="/new">
          <NewMeetupsPage />
        </Route>
        <Route path="/favorite">
          <FavoritePage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
