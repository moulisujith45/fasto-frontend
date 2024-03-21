import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startGetAllOrders } from "../../actions/orderAction";

export default function GetOrder() {
  const order = useSelector((state) => state.order.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startGetAllOrders());
  }, [dispatch]);

 
  return (
    <div>
    <table border="1">
      <thead>
        <tr>
          <th>Customer</th>
          <th>Total</th>
          <th>City</th>
        </tr>
      </thead>
      <tbody>
        {order?.map((ele) => (
          <tr key={ele.id}>
            <td>{ele?.customerId?.username}</td>
            <td>{ele.total}</td>
            <td>{ele.addressId.city}</td>
  
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  
  
  );
}
