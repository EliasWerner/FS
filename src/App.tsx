import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./App.css";
import { AppRouter } from "./components/router/router";
import { Footer } from "./components/shared/footer/footer";
import { Header } from "./components/shared/header/header";
import { HorizontalMenu } from "./components/shared/horizontalMenu/horizontalMenu";

library.add(fas, far);

function App() {
  return (
    <div className="App">
      <Header />
      <HorizontalMenu />
      <div className="content">
        <AppRouter />
      </div>
      <Footer />
    </div>
  );
}

export default App;
