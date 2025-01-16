import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from './About'
import GetStartedPage from './GetStarted';
import ResourcesPage from "./Resources";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GetStartedPage />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/resources",
    element: <ResourcesPage />
  }
]);

const App = () => {
  return <RouterProvider router={router} />
}

export default App
