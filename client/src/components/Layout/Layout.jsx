import React, { Fragment } from "react";

import MainNav from "../MainNav/MainNav";
import Footer from "../footer/Footer";
import Routers from "../../routers/Routers";

const Layout = () => {
  return (
    <Fragment>
      <MainNav />
      <div>
        <Routers />
      </div>
      <Footer />
    </Fragment>
  );
};

export default Layout;
