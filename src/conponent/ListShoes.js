import React from "react";
import "./index.scss";
import { jsonData } from "../apiConfig/data";
import Shoes from "./Shoes";

const ListShoes = () => {
  return (
    <div className="container">
      <div className="shoes-item-list">
        {jsonData.map((item) => {
          return <Shoes key={item.id} value={item.id-1} item={item}></Shoes>;
        })}
      </div>
    </div>
  );
};

export default ListShoes;
