import "./index.scss";

import routes, { renderRoutes } from "./routes";
function App() {
  return <div className="App">{renderRoutes(routes)}</div>;
}

export default App;
