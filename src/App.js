import {useEffect, useState} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import netlifyIdentity from "netlify-identity-widget";

import NavBar from "./components/NavBar";
import SamplePage from "./pages/SamplePage";
import Home from "./pages/Home";

import {loginUser, logoutUser} from "./lib/identityActions";

import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userCookie = localStorage.getItem("currentOpenSaucedUser");

    if (userCookie) {
      setUser(JSON.parse(userCookie))
      console.log(JSON.parse(userCookie))
    } else {
      loginUser();
    }

    netlifyIdentity.on("login", (user) => {
      setUser(user);
      loginUser()
      console.log(user)
    });

    netlifyIdentity.on("logout", () => {
      setUser(null)
      logoutUser()
    });
  }, [])

  return (
    <Router>
      <div className={"content"}>
        <NavBar user={user}/>
        <Routes>
          <Route path={"/"} exact element={<Home />} />
          <Route
            path="*"
            element={<SamplePage title={"404"}>404 Page Not Found</SamplePage>}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
