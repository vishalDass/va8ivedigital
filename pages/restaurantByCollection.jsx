import react from "react";
import SideNav, { MenuIcon } from "react-simple-sidenav";
import React, { Component } from "react";
import { useRouter } from "next/router";

const renderRestaurantInfo = props => {
  console.log("TRAILS", props.result.restaurants[0].restaurant);
  let style = {
    width: "300px",
    height: "300px",
    margin: "10px 10px 10px 10px",
    backgroundColor: "white"
  };

  const restaurants = props.result.restaurants.map(t => {
    return (
      <div className="card" style={{ width: 30 + "rem" }}>
        <img
          className="card-img-top"
          src={t.restaurant.featured_image}
          style={style}
        />

        <div className="card-body">
          <h1 className="card-title">{t.restaurant.name}</h1>
          {/* <h2 className="card-text">{t.location.address} </h2> */}
          <h4 className="card-text">{t.timings} </h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Cusines: {t.cuisines}</li>
            <li className="list-group-item">currency: {t.currency} miles</li>
            <li className="list-group-item">
              has_online_delivery {t.has_online_delivery} ft, Descent:{" "}
              {t.has_online_delivery} ft
            </li>
            <li className="list-group-item">
              price_range: {t.price_range}, {t.price_range}{" "}
            </li>
          </ul>
        </div>
      </div>
    );
  });

  return (
    <React.Fragment>
      <SideNav />
      <div className="row" style={{ margin: "10px 10px 10px 10px" }}>
        {restaurants}
      </div>
    </React.Fragment>
  );
};

renderRestaurantInfo.getInitialProps = async function({ query }) {
  const url = `https://developers.zomato.com/api/v2.1/search?collection_id=${query.cid}`;
  const res = await fetch(url, {
    headers: {
      "user-key": "477646bb6cbda47c85e1f1fb90afb556",
      Accept: "application/json"
    }
  });

  const result = await res.json();
  console.log("result", result);
  return { result };
};

export default renderRestaurantInfo;
