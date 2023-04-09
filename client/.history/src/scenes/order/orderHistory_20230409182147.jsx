
import React, { useState, useEffect } from 'react'
import { useNavigate,Link } from 'react-router-dom';
import axios from "axios";
import { setItems } from "../../state";
import { useSelector, useDispatch } from 'react-redux';

const OrderHistory = () => {
    const dispatch = useDispatch();
    const urlForServer = "http://localhost:3200/";
    const [display, setDisplay] = useState([]);
    const fetchData = async () => {
        let res = await axios.get(urlForServer + "order");
        console.log(res.data);
        setDisplay(res.data);
        console.log(display);
      };


    async function getItems() {
        // const items = await fetch(
        //   // "http://localhost:1337/api/items?populate=image",
       
        //   { method: "GET" }
        // );
        let histories = await axios.get(urlForServer + "order");
        // const itemsJson = await items.json();
        dispatch(setItems(histories.data));
      }
    
      useEffect(() => {
        getItems();
        fetchData();
      }, []);

  return (
    <div style={{width:"80%", margin:"80px auto"}}>

        <h1>Order History</h1>
      
        {display.map((item) => (
        <div key={item._id}>
          <h2>Order {item._id}</h2>
          {item.order.map((orderItem, index) => (
            <div key={index}  style={{ display: "flex", justifyContent: "space-between" }}>
              <p>{orderItem.name} {orderItem.price} CAD x {orderItem.count} </p>
            
                <span>{item.name}</span>
                <span>{item.price}</span>
            </div>
          ))}
          <p>Subtotel Price: {item.subPrice}</p>
          <hr/>
        </div>
       
      ))}
    </div>
   
  )
}

export default OrderHistory;