import React, { Component, useEffect, useState } from "react";
import axios from "axios";



const Manage = () => {
  const [user, setUser] = useState([]);
  const fetchData = async () => {
    let res = await axios.get("http://localhost:8000/users/getUsers");
    setUser(res.data.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const deluser = async (id) => {
    let res = await axios.delete(
      `http://localhost:8000/users/deleteUser/${id}`
    );
    console.log(res.data);
    fetchData();
  };
  const renderList = () => {
    return user.map((v) => {
      return (
        <div key={v.id}>
          {v.id} {v.name} {v.address.subDistrict}{" "}
          <button
            onClick={() => {
              deluser(v.id);
            }}
          >
            DEL
          </button>
        </div>
      );
    });
  };
  return(
       <div>
        
        {renderList()}
        </div>
  )
 
};

export default Manage;
