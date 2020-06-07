import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import './user.css'

const Users = () => {
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
        <div key={v}>
          <table class="table">
          <thead>
      <tr>
      <th >ID</th>
      <th className="name">Name</th>
      <th className="nickname">Nickname</th>
      <th className="age">Age</th>
      <th>PhoneNumber</th>
      <th>Line</th>
      <th>E-mail</th>
      <th>Address</th> 
      <th>จัดการ USER</th> 

      </tr>
    </thead>
            <tbody>
              <tr>
                <th scope="row">{v.id}</th>
                <td>
                  {v.name} {v.surname}
                </td>
                <td>{v.nickname}</td>
                <td>{v.age}</td>
                <td>{v.phoneNumber}</td>
                <td>{v.line}</td>
                <td>{v.email}</td>
                <td>
                  {" "}
                  บ้านเลขที่ {v.address.houseNo} หมู่{v.address.village} ต.
                  {v.address.subDistrict} อ.{v.address.district} จ.
                  {v.address.province} {v.address.country}{" "}
                  {v.address.postalCode}{" "}
                </td>
                <button
                  onClick={() => {
                    deluser(v.id);
                  }}
                >
                  DEL
                </button>
              </tr>
            </tbody>
          </table>

          {/* <button
            onClick={() => {
              deluser(v.id);
            }}
          >
            DEL
          </button>
           */}
        </div>
      );
    });
  };
  return  (
    <div>
      
      {/* <div className="title">
      <th className="id">ID</th>
      <th className="name">Name</th>
      <th className="nickname">Nickname</th>
      <th className="age">Age</th>
      <th>PhoneNumber</th>
      <th>Line</th>
      <th>E-mail</th>
      <th>Address</th> 
      <th>จัดการ USER</th> 

      </div> */}
     
      {renderList()}
  
    </div>
  );
};

export default Users;
