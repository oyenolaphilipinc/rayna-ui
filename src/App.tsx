import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./About";
import GetStartedPage from "./GetStarted";
import SoftwarePage from "./Software";
import BusinessPage from "./BusinessSolutions";
import DigitalPage from "./Digital";
import ITPage from "./IT";
import ContactSection from "./components/Contact";

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
    path: "/software",
    element: <SoftwarePage />,
  },
  {
    path: "/business-page",
    element: <BusinessPage />,
  },
  {
    path: "/digital",
    element: <DigitalPage />,
  },
  {
    path: "/it-page",
    element: <ITPage />,
  },
  {
    path: "/contact",
    element: <ContactSection />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
