import React, { useState } from "react";
import { useEffect } from "react";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "./firebase-app/firebase-config";
import "./index.scss";
import ShoesInCart from "./ShoesInCart";
const colRef = collection(db, "shoesincart");
const ListCart = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    // getDocs(colRef).then((snapshot) => {
    //   let data = [];
    //   snapshot.docs.forEach((doc) => {
    //     data.push({
    //       id: doc.id,
    //       ...doc.data(),
    //     });
    //   });
    //   setData(data);
    // });
    onSnapshot(colRef, (snapshot) => {
      let data = [];
      snapshot.docs.forEach((doc) => {
        data.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setData(data);
    });
  }, []);

  console.log(data);
  return (
    <>
      <div className="container">
        {data.length === 0 && <h1 className="noItem">No Item</h1>}
        <div className="shoes-item-list">
          {data.length > 0 &&
            data.map((item) => (
              <ShoesInCart
                id={item.id}
                key={item.image}
                img={item.image}
                price={item.price}
                color={item.color}
                name={item.name}
                description={item.description}
              ></ShoesInCart>
            ))}
        </div>
      </div>
    </>
  );
};

export default ListCart;
