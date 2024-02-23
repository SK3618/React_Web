import "./App.css";
import Home from "./home";
import Navbar from "./navbar";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Attractions from "./attractions";
import Contact from "./Contact";
import Suggestions from "./suggestions";
import Acc from "./acc";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar
            state="nav-link mx-4 my-2 fs-4 active"
            state2="nav-link mx-4 my-2 fs-4"
            state3="nav-link mx-4 my-2 fs-4"
            state4="nav-link mx-4 my-2 fs-4"
            state5="nav-link mx-4 my-2 fs-4"
          />
          <Home />
        </>
      ),
    },
    {
      path: "/attractions",
      element: (
        <>
          <Navbar
            state2="nav-link mx-4 fs-4 active"
            state="nav-link mx-4 fs-4"
            state3="nav-link mx-4 fs-4"
            state4="nav-link mx-4 fs-4"
            state5="nav-link mx-4 fs-4"
          />
          <Attractions/>
        </>
      ),
    },
    {
      path: "/accomodation",
      element: (
        <>
          <Navbar
            state2="nav-link mx-4 fs-4 "
            state="nav-link mx-4 fs-4"
            state3="nav-link mx-4 fs-4 active"
            state4="nav-link mx-4 fs-4"
            state5="nav-link mx-4 fs-4"
          />
          <Acc/>
        </>
      ),
    },
    {
      path: "/contact_us",
      element: (
        <>
          <Navbar
            state2="nav-link mx-4 fs-4"
            state="nav-link mx-4 fs-4"
            state3="nav-link mx-4 fs-4"
            state4="nav-link mx-4 fs-4"
            state5="nav-link mx-4 fs-4 active"
          />
          <Contact/>
        </>
      ),
    },
    {
      path: "/suggestions",
      element: (
        <>
          <Navbar
            state2="nav-link mx-4 fs-4"
            state="nav-link mx-4 fs-4"
            state3="nav-link mx-4 fs-4"
            state4="nav-link mx-4 fs-4 active"
            state5="nav-link mx-4 fs-4"
          />
          <Suggestions />
        </>
      ),
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
export default App;
