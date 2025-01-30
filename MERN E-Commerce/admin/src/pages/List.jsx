import React, { useEffect, useState } from "react";
import axios from "axios";
import { backendUrl } from "../App.jsx";

const List = ({ token }) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      console.log(backendUrl);

      const res = await axios.get(backendUrl + "/api/product/list");
      console.log(res.data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchList();
  }, []);

  return <div></div>;
};

export default List;
