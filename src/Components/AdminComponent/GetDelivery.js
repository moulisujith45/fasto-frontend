import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startGetAllDeliveryMan } from "../../actions/deliveryAction";

export default function GetDelivery() {
  const delivery = useSelector((state) => {
    return state.delivery;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startGetAllDeliveryMan());
  }, [dispatch]);

  return (
    <div>
      <ul>
        {delivery.map((ele, index) => (
          <li key={ele.id || index}> Name :{ele.username} <br/> Mobile :  {ele.mobile} <br/> Status : {ele.status}</li>
        ))}
      </ul>
    </div>
  );
}
