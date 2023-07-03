import React, { Fragment } from "react";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import Routers from "../src/components/../routers/Routers";

export default function App() {
  return (
    <Fragment>
      <Header />
      <div>
        <Routers />
      </div>
      <Footer />
    </Fragment>
  );
}