import React from "react";
import { Outlet, useNavigation } from "react-router-dom";

import Header from "./Header";
import Loading from "./Loader";
import CartOverview from "../cart/CartOverview";

const AppLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="grid h-screen grid-rows-[auto,1fr,auto]">
      {isLoading && <Loading />}
      <Header />
      <div className="overflow-scroll">
        <main className="mx-auto max-w-3xl">
          <Outlet />
        </main>
      </div>
      <CartOverview />
    </div>
  );
};

export default AppLayout;
