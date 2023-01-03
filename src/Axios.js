import React, { useState, useEffect } from "react";
import axios from "axios";

function Axios() {
  const [responsedata, setResponseData] = useState([]);
  const [error, setEror] = useState("");
  // useEffect(() => {
  //     axios("https://jsonplaceholder.typicode.com/users")
  //         .then((resp) => {
  //             setResponseData(resp.data)
  //         })
  //         .catch((error) => { setEror(error.message) })
  // }, [])

  // by using the async function

  const getApi = async () => {
    try {
      const respones = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setResponseData(respones.data);
    } catch (error) {
      setEror(error.message);
    }
  };
  useEffect(() => {
    getApi();
  }, []);
  return (
    <>
      <div className="container">
        <h1>Axios data</h1>
        {error !== "" && <h3>{error}</h3>}
        <div className="grid">
          {responsedata.map((value) => {
            const { id, name, username, email } = value;
            return (
              <div className="card" key={id}>
                <h2>{name}</h2>
                <p>{username}</p>
                <p>{email}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Axios;
