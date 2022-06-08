import React, { useEffect, useState, Suspense } from "react";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";

import AllHotels from "./pages/AllHotels";
import NewHotel from "./pages/NewHotel";
import Layout from "./components/layout/Layout";
import HotelDeleteModal from "./components/hotels/HotelDeleteModal";

function App() {
  const [modalIsShown, setModalIsShown] = useState(false);

  let history = useHistory();
  useEffect(() => {
    history.push("/hotels-list");
  }, [history]);

  const showModalHandler = () => {
    setModalIsShown(true);
  };

  return (
    <Layout>
      <Suspense>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/hotels-list" />
          </Route>
          {modalIsShown && (
            <HotelDeleteModal
              modalIsShown={modalIsShown}
              setModalIsShown={setModalIsShown}
            />
          )}
          <Route path="/hotels-list" exact>
            <AllHotels onShowModal={showModalHandler} />
          </Route>
          <Route path="/new-hotel">
            <NewHotel />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
