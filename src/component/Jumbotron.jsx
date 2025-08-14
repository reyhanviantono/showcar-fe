import React from "react";

import { Jumbotron } from "react-bootstrap";

function JumbotronCustome() {
  return (
    <div>
      <div className="jumbotron jumbotron-custom">
        <h1 className="display-4 font-weight-bold">Selamat Datang </h1>
        <p className="lead font-weight-bold">
          Menyediakan Berbagai Mobil Sesuai Dengan Pilihan Anda
        </p>
        <hr className="my-4" />
        <p className="font-weight-bold">
          Temukan Mobil Idaman Mu, Nikmati Perjalan Mu
        </p>
        
      </div>
    </div>
  );
}

export default JumbotronCustome;
