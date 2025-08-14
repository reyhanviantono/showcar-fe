import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { DetailMobil, GetRecomended, Rating, Comment } from "../utils/CallApi";
import StarRatings from "react-star-ratings";
import NavbarCustome from "../component/Navbar";
import ListCarHome from "../component/ListCarHome";
import { getToken, getUsers } from "../utils/LocalStorage";
import { toast } from "react-toastify";
import ListComment from "../component/ListComment";

export default function AboutPage() {
  const { id } = useParams();
  const [detail, setDetail] = useState({});
  const [listRecomend, setListRecomend] = useState([]);
  const [comment, setComment] = useState("");

  const fetch = async () => {
    const res = await DetailMobil(id);
    setDetail(res);
    const resRecomen = await GetRecomended(id, res.brand);
    setListRecomend(resRecomen);
  };

  const handleSubmit = async () => {
    const token = getToken();
    const user = getUsers();
    if (!token) {
      toast.error("anda harus login untuk memberikan comment");
      return;
    }
    const getUser = JSON.parse(user);
    const userId = getUser.id;
    const res = await Comment(userId, +id, comment);
    if (res !== null) {
      const res = await DetailMobil(id);
      setDetail(res);
      toast.success(`success anda memberikan comment`);
    }
  };

  const handleRating = async (e) => {
    const token = getToken();
    const user = getUsers();
    if (!token) {
      toast.error("anda harus login untuk memberikan rating");
      return;
    }
    const getUser = JSON.parse(user);
    const res = await Rating(getUser.id, +id, e);
    if (res !== null) {
      toast.success(`success anda memberikan rate ${e}`);
      // fetch ulang detail
      const res = await DetailMobil(id);
      setDetail(res);
    }
  };

  useEffect(() => {
    fetch();

    return () => {
      setDetail({});
      setListRecomend([]);
    };
  }, [id]);

  return (
    <>
    <div className="homepage-container">

      <NavbarCustome />
      <div className="container car-detail-container ">
        <div className="row">
          <div className="col-md-6">
            <img
              src={detail?.image}
              alt="Gambar Mobil"
              className="car-image img-fluid"
            />
          </div>
          <div className="col-md-6">
            <h1 className="mb-3">{detail?.name}</h1>
            <p className="lead">{detail?.desc}</p>

            <p className="rating">
              Rating:
              <span>
                <StarRatings
                  rating={detail?.average_rating}
                  starRatedColor="yellow"
                  isSelectable={false}
                  starDimension="20px"
                  changeRating={handleRating}
                  numberOfStars={5}
                  name="rating"
                />
              </span>
            </p>
            <Link to={`/`} className="text-white">
              <button className="btn btn-primary px-5">Home</button>
            </Link>
          </div>
        </div>

        <div>
          <textarea
            className="form-control mt-5"
            id="validationTextarea"
            placeholder="Tuliskan Komentar Anda"
            style={{ height: "100px" }}
            onChange={(e) => setComment(e.target.value)}
          >
            {" "}
          </textarea>
          <div className="d-flex justify-content-end">
            <button
              className="btn btn-md btn-success mt-3"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
          <ListComment data={detail?.comments} />
        </div>

        <div className="mt-5">
          <h3>Rekomendasi Mobil Lain</h3>

          <div className="row mt-3">
            {listRecomend?.map((el) => (
              <ListCarHome
                key={el.id}
                id={el?.id}
                title={el?.name}
                image={el?.image}
                rating={el?.average_rating}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
