import React from "react";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
  serverTimestamp,
  updateDoc,
  getDoc,
  where,
  orderBy,
  limit,
  query,
} from "firebase/firestore";
import { useState } from "react";
import "./index.scss";
import { createContext } from "react";
import { jsonData } from "../apiConfig/data";
import { db } from "./firebase-app/firebase-config";
export const Cart = createContext();
const Shoes = ({ item, value }) => {
  const colRef = collection(db, "shoesincart");
  const [add, setAdd] = useState(false);
  const handelAdd = async () => {
    setAdd(true);
       await addDoc(colRef, {
        image: jsonData[value].image,
        color: jsonData[value].color,
        price:jsonData[value].price,
        name:jsonData[value].name,
        description:jsonData[value].description,
        createdAt: serverTimestamp(),
      })
        
  };
  console.log(jsonData[value])
  return (
    <div className="shoes-wrap">
      <div style={{backgroundColor:item.color}} className="shoes">
        <img src={item.image} alt="hinhanh"></img>
        <h1>{item.name}</h1>
        <span className="description">{item.description}</span>
        <span className="price">${item.price}</span>
        {!add && (
          <button onClick={handelAdd} className="addtocart">
            Add to cart
          </button>
        )}
        {add && (
          <div className="checked">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shoes;
