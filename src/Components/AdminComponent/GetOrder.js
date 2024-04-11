import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startGetAllOrders } from "../../actions/orderAction";
import { Table } from 'react-bootstrap'

export default function GetOrder() {
  const order = useSelector((state) => state.order.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startGetAllOrders());
  }, [dispatch]);

 
  return (
  //   <div>
  //   <table border="1">
  //     <thead>
  //       <tr>
  //         <th>Customer</th>
  //         <th>Product</th>
  //         <th>Quantity</th>
  //         <th>Total</th>
  //         <th>City</th>
  //       </tr>
  //     </thead>
  //     <tbody>
  //       {order?.map((ele) => (
  //         <tr key={ele.id}>
  //           <td>{ele?.customerId?.username}</td>
  //           <td>{ele.cart.products.map(product => <div key={product.productId._id}>
  //             <td>{product.productId.name}</td>
  //             <td> <img height={50} src={`http://localhost:3040/images/${product.productId.image}`}/></td>
  //             <td>{product.quantity}</td>
  //           </div>)}</td>
  //           <td>{ele.total}</td>
  //           <td>{ele.addressId.city}</td>
        
  
  //         </tr>
  //       ))}
  //     </tbody>
  //   </table>
  // </div>
  

<div style={{ overflowX: 'auto' }}>
  <Table bordered style={{ width: '100%', borderCollapse: 'collapse' }}>
    <thead>
      <tr>
        <th>Customer</th>
        <th>Product</th>
        <th>Image</th>
        <th>Quantity</th>
        <th>Total</th>
        <th>City</th>
      </tr>
    </thead>
    <tbody>
      {order?.map((ele) => (
        <tr key={ele.id}>
          <td>{ele?.customerId?.username}</td>
          <td>
            {ele.cart.products.map(product => (
              <div style={{ width: '70px', height: '70px' }} key={product.productId._id}>
              
                {product.productId.name}
              </div>
            ))}
          </td>
          <td>
            {ele.cart.products.map(product => (
              <div style={{ width: '70px', height: '70px' }} key={product.productId._id}>
                
                <img src={`http://localhost:3040/images/${product.productId.image}`} alt={product.productId.name} height={50} />
              </div>
            ))}
          </td>
          <td>
            {ele.cart.products.map(product => (
              <div style={{ width: '70px', height: '70px' }} key={product.productId._id}>
                
                {product.quantity}
              </div>
            ))}
          </td>
          <td>{ele.total}</td>
          <td>{ele.addressId.city}</td>
        </tr>
      ))}
    </tbody>
  </Table>
</div>


  
  
  );
}
