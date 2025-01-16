import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from './About'
import GetStartedPage from './GetStarted';
import ResourcesPage from "./Resources";
import Newsletter from "./Newsletter";

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
  },
  {
    path: "/newsletter",
    element: <Newsletter />
  }
]);

const App = () => {
  return <RouterProvider router={router} />
}

export default App
