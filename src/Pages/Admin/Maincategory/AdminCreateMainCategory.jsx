import React from "react";
import Sidebar from "../../Components/Sidebar";
import { Link } from "react-router-dom";

export default function AdminCreateMainCategory() {
  return (
    <>
      <div className="container-fluid my-3">
        <div className="row">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-9">
            <h5 className="bg-primary p-2 text-light text-center">
              Maincategory{" "}
              <Link to="/admin/maincategory">
                {" "}
                <i className="fa fa-backward float-end text-light"></i>{" "}
              </Link>{" "}
            </h5>
          </div>
        </div>
      </div>
    </>
  );
}
