import React from "react";

export default function Card(){

    return <div className="col__item col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
  <div className="container">
    <div className="card bg-light" style={{ width: 300 }}>
      <img
        className="card-img-top"
        src="./img/sp_vivo850.png"
        alt="Card image"
        style={{ maxWidth: "100%", height: 250 }}
      />
      <div className="card-body text-center">
        <h4 className="card-title text-center">iPhone X</h4>
        <p className="card-text">
          iPhone X features a new all-screen design. Face ID, which makes your
          face your password
        </p>
        <a href="#" className="btn btn-primary">
          Detail
        </a>
        <a href="#" className="btn btn-danger">
          Cart
        </a>
      </div>
    </div>
  </div>
</div>
}