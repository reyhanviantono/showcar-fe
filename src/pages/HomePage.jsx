import React, { useEffect, useState } from "react";
import NavbarCustome from "../component/Navbar";
import JumbotronCustome from "../component/Jumbotron";
import { Link } from "react-router-dom";
import { ListMobil } from "../utils/CallApi";
import ListCarHome from "../component/ListCarHome";

export default function HomePage() {
  const [listMobil, setListMobil] = useState([]);

  const fetchCar = async () => {
    const res = await ListMobil();
    console.log(res)
    setListMobil(res);
  };

  useEffect(() => {
    fetchCar();
  }, []);

  return (
    <div className="homepage-container">
      <NavbarCustome />
      <JumbotronCustome />

      <div className="container">
        <h3 className="mb-5">Pilihan Mobil</h3>
        <div className="row">
          {listMobil?.map((el, i) => (
            <ListCarHome
              key={i}
              id={el?.id}
              title={el?.name}
              image={el?.image}
              rating={el?.average_rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
