import { deleteDoc, doc } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "./firebase-app/firebase-config";
import "./index.scss";

const ShoesInCart = ({ img, price, color, name, description, id }) => {
  const colRefDelete = doc(db, "shoesincart", id);
  const [count, setCount] = useState(0);
  const [decre, setDecre] = useState(true);
  const handelIncre = async () => {
    if (count === 0) {
      setCount(count - 1);
      setDecre(false);
      await deleteDoc(colRefDelete);
    } else if (count > 0) {
      setCount(count - 1);
      setDecre(true);
    } else {
      setCount(count);
    }
  };
  const handelDecre = () => {
    setCount(count + 1);
    setDecre(true);
  };
  const handelRpemove = async () => {
    await deleteDoc(colRefDelete);
  };
  return (
    <div className="shoes-wrap">
      <div  className="shoes">
        <img style={{ backgroundColor: color, borderRadius:"20px 20px 0 0" }} src={img} alt="hinhanh"></img>
        <h1>{name}</h1>
        <span className="description">{description}</span>
        <span className="price">${(price * (count + 1)).toFixed(2)}</span>
        <div className="count">
          <span className={decre ? "decre" : "disable"}>
            <svg
              onClick={handelIncre}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="3"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M18 12H6"
              />
            </svg>
          </span>
          <span className="number">{count + 1}</span>
          <span className="incre">
            <svg
              onClick={handelDecre}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="3"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </span>
        </div>
        <span onClick={handelRpemove} className="remove">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="0.9"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default ShoesInCart;
