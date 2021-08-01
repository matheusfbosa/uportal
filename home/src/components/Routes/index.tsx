import { lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const About = lazy(() => import("../../pages/About"));
const Contact = lazy(() => import("../../pages/Contact"));
const Home = lazy(() => import("../../pages/Home"));

const Routes = () => (
  <Suspense fallback={<p>Loading...</p>}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </BrowserRouter>
  </Suspense>
);

export default Routes;
