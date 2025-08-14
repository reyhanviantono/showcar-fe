import React from "react";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";

function ListCarHome({ image, title, id, rating }) {
  return (
    <div className="col-md-4 mt-3">
      <div className="card card-container" style={{ width: "18rem" }}>
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            <StarRatings
              rating={rating}
              starRatedColor="yellow"
              isSelectable={false}
              starDimension="20px"
              changeRating={(e) => console.log(e)}
              numberOfStars={5}
              name="rating"
            />
          </p>
          <Link to={`/detail/${id}`} className="text-white">
            <button className="btn btn-primary">Lihat Detail</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ListCarHome;
