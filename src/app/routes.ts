import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import People from "./pages/People";
import Publications from "./pages/Publications";
import News from "./pages/News";
import GetInvolved from "./pages/GetInvolved";
import Contact from "./pages/Contact";
import Components from "./pages/Components";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/projects",
    Component: Projects,
  },
  {
    path: "/projects/:slug",
    Component: Projects,
  },
  {
    path: "/people",
    Component: People,
  },
  {
    path: "/publications",
    Component: Publications,
  },
  {
    path: "/news",
    Component: News,
  },
  {
    path: "/get-involved",
    Component: GetInvolved,
  },
  {
    path: "/contact",
    Component: Contact,
  },
  {
    path: "/components",
    Component: Components,
  },
]);
