import React from "react";
import Sidebar from "../../Components/Sidebar";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import formValidator from "../../validators/FormValidator";
import ImageValidator from "../../validators/ImageValidator";

export default function AdminCreateMainCategory() {
  let [data, setData] = useState({
    name: "",
    pic: "",
    active: "true",
  });

  let [errorMessage, seteErrorMessage] = useState({
    name: "Name Field is Mandotary",
    pic: "Pic Field is Mandotary",
  });

  let [show, setShow] = useState(false);
  let navigate = useNavigate()

  function getInputData(e) {
    var name = e.target.name;
    var value = e.target.files ? "/maincategory/" + e.target.files[0].name : e.target.value;
    if (name !== "active") {
      seteErrorMessage((old) => {
        return {
          ...old,
          [name]: e.target.files ? ImageValidator(e) : formValidator(e),
        };
      });
    }
    setData((old) => {
      return {
        ...old,
        [name]: name === "active" ? (value === "1" ? true : false) : value,
      };
    });
  }

  async function postData(e) {
    e.preventDefault();
    let error = Object.values(errorMessage).find((x) => x !== "");
    if (error)
      setShow(true)
    else {
      let response = await fetch("http://localhost:8000/maincategory", {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({ ...data })

      })
      response = await response.json()
      if (response)
        navigate("/admin/maincategry")
      else
        alert("something went wrong")
    }
  }

  return (
    <>
      <div className="container-fluid my-3">
        <div className="row">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-9">
            <h5 className="bg-primary p-2 text-light text-center"> Maincategory
              <Link to="/admin/maincategory"> <i className="fa fa-backward float-end text-light"></i>{" "} </Link>
            </h5>
            <form onSubmit={postData}>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label>Name*</label>
                  <input type="text" name="name" onChange={getInputData}
                    className={`form-control border-2 ${show && errorMessage.name ? "border-danger" : "border-primary"}`}
                    placeholder="MainCategory name.." /> {show && errorMessage.name ?
                      <p className="text-danger text-capitalize"> {errorMessage.name} </p> : ""}
                </div>
                <div className="col-md-6 mb-3">
                  <label>Pic*</label>
                  <input type="file" name="pic" onChange={getInputData} className={`form-control border-2 ${show && errorMessage.pic ? "border-danger" : "border-primary"
                    }`}
                  />
                  {show && errorMessage.pic ? (
                    <p className="text-danger text-capitalize">
                      {errorMessage.pic}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                <div className="col-md-6 mb-3">
                  <label>Active*</label>
                  <select name="active" className="form-control border-2 border-primary">
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                  </select>

                </div>
              </div>
              <div className="mb-3">
                <button type="submit" className="btn btn-primary w-100">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
