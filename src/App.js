import './index.css';

function App() {
    return (
        <Router>
          <Switch>
            {routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} />
            ))}
          </Switch>
      </Router>
    );
}

export default App;
