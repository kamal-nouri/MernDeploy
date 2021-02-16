import React, { useEffect, useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";

export default (props) => {
  const { id } = props;
  const [name, setName] = useState("");
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/" + id).then((res) => {
      setName(res.data.name);
    });
  }, []);
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (name.length < 3) {
        setErrors("auther name should be at least 3 char")
    } else {
      axios
        .put("http://localhost:8000/api/edit/" + id, {
          name,
        })
        .then(() => navigate("/"));
    }
  };
  return (
    <div>
      <p>
        Update auther :&nbsp;
        <p style={{color:"red"}} >{errors}</p>
      </p>
      <form onSubmit={onSubmitHandler}>
        <p>
          <label>Auther Name :</label>
          <br />
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </p>
        <input type="submit" />
      </form>
    </div>
  );
};
