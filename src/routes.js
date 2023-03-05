import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import LoadingScreen from "./components/LoadingScreen";

export const renderRoutes = (routes) => (
  <Suspense fallback={<LoadingScreen />}>
    <Routes>
      {routes.map((route, index) => {
        const Component = route.component;
        const Layout = route.layout;

        return (
          <Route
            key={index}
            path={route.path}
            element={
              <Layout>
                <Component />
              </Layout>
            }
          />
        );
      })}
    </Routes>
  </Suspense>
);
const routes = [
  {
    exact: true,
    path: "/",
    component: lazy(() => import("./pages/Home")),
    layout: lazy(() => import("./Layouts/Main/")),
  },

  {
    exact: true,
    path: "/games",
    component: lazy(() => import("./pages/Games")),
    layout: lazy(() => import("./Layouts/Main")),
  },
  {
    exact: true,
    path: "/shop",
    component: lazy(() => import("./pages/Shop")),
    layout: lazy(() => import("./Layouts/Main")),
  },
  {
    exact: true,
    path: "/competition",
    component: lazy(() => import("./pages/Competition")),
    layout: lazy(() => import("./Layouts/Main")),
  },
  {
    exact: true,
    path: "/create/competition",
    component: lazy(() => import("./pages/CreateCompetition")),
    layout: lazy(() => import("./Layouts/Main")),
  },
  {
    exact: true,
    path: "/events",
    component: lazy(() => import("./pages/Event")),
    layout: lazy(() => import("./Layouts/Main")),
  },
  {
    exact: true,
    path: "/teams",
    component: lazy(() => import("./pages/Teams")),
    layout: lazy(() => import("./Layouts/Main")),
  },
  {
    exact: true,
    path: "/help",
    component: lazy(() => import("./pages/Help")),
    layout: lazy(() => import("./Layouts/Main")),
  },
  {
    exact: true,
    path: "/*",
    component: lazy(() => import("./pages/NotFound")),
    layout: lazy(() => import("./Layouts/Main")),
  },
];

export default routes;
