import React, { useEffect, useState } from "react";
import Sidebar from "../../Components/Sidebar";
import { Link } from "react-router-dom";

export default function AdminMainCategory() {
  let [data, setData] = useState([])

  async function getAPIData() {
    let response = await fetch("http://localhost:8000/maincategory", {
      method: "GET",
      headers: {
        "content-type": "application/json"
      }
    })
    response = await response.json()
    if (response) {
      setData(response)
    }
    else
      alert("Something Went Wrong")
  }
  useEffect(() => {
    getAPIData()
  }, [])
  return (
    <>
      <div className="container-fluid my-3">
        <div className="row">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-9">
            <h5 className="bg-primary p-2 text-light text-center">Maincategory <Link to="/admin/maincategory/create"> <i className="fa fa-plus float-end text-light"></i> </Link> </h5>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Pic</th>
                  <th></th>
                  <th></th>

                </tr>
              </thead>
              <tbody>
                {
                  data.map((item, index) => {
                    return <tr key={index}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>
                        <Link to={item.pic} target="_blank" rel="noreferrer">
                          <img src={`http://localhost:8000/${item.pic}`} height={50} width={80} alt="pic" /></Link>
                      </td>
                      <td><Link to={`/maincategory/update/${item.id}`} className="btn btn-success"><i className="fa fa-edit fs-5"> </i></Link></td>
                      <td><button className="btn btn-danger"><i className="fa fa-trash fs-5"> </i></button></td>

                    </tr>
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
