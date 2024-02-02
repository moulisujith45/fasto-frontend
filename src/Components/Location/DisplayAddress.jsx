

// import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import AddAddress from "./AddAddress";
// import { startGetAddress } from "../../actions/addressAction";
// import { Card, Button } from "react-bootstrap";

// export default function DisplayAddress() {
//   const addressDetails = useSelector((state) => {
//     return state.address; // Assuming addresses is an array inside the address object
//   });

//   const dispatch = useDispatch();
//   const [toggleAddAddress, setToggleAddAddress] = useState(false);

//   useEffect(() => {
//     dispatch(startGetAddress());
//   }, []); // Use an empty dependency array to fetch addresses only on mount

//   console.log(addressDetails, "i am address");

//   // Check if addressDetails is an array
//   // const isAddressArray = Array.isArray(addressDetails);
 
//   return (
//     <>
//       {addressDetails && Object.keys(addressDetails).length > 0 ? (
//         <div>
//          {console.log(addressDetails)}
//             <Card
//               key={addressDetails._id}
//               style={{ width: "18rem", marginBottom: "10px" }}
//             >
//               <Card.Body>
//                 <Card.Title>{addressDetails.building}</Card.Title>
//                 <Card.Text>
//                   <strong>Locality:</strong> {addressDetails.locality}
//                   <br />
//                   <strong>City:</strong> {addressDetails.city}
//                   <br />
//                   <strong>State:</strong> {addressDetails.state}
//                   <br />
//                   <strong>Pincode:</strong> {addressDetails.pincode}
//                   <br />
//                   <strong>Country:</strong> {addressDetails.country}
//                 </Card.Text>
//               </Card.Body>
//             </Card>
          
//           <Button onClick={() => setToggleAddAddress(!toggleAddAddress)}>
//             Edit
//           </Button>
//         </div>
//       ) : (
//         toggleAddAddress && <AddAddress />
//       )}

//       <div>
//         {toggleAddAddress ? (
//           <Button onClick={() => setToggleAddAddress(!toggleAddAddress)}>
//             {toggleAddAddress ? "Cancel" : <AddAddress/> }
//           </Button>
//         ) : (
//           Object.keys(addressDetails).length === 0 && (
//             <Button onClick={() => setToggleAddAddress(!toggleAddAddress)}>
//               Add Address
//             </Button>
//           )
//         )}

        
//       </div>
//     </>
//   );
// }



import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import AddAddress from "./AddAddress";
import { startGetAddress } from "../../actions/addressAction";
import { Card, Button } from "react-bootstrap";

export default function DisplayAddress() {
  const addressDetails = useSelector((state) => {
    return state.address; // Assuming addresses is an array inside the address object
  });

  const dispatch = useDispatch();
  const [toggleAddAddress, setToggleAddAddress] = useState(false);
  const [toggleEditAddress, setToogleEditAddress] = useState(false)

  useEffect(() => {
    dispatch(startGetAddress());
  }, []); // Use an empty dependency array to fetch addresses only on mount

  console.log(addressDetails, "i am address");

  // Check if addressDetails is an array
  // const isAddressArray = Array.isArray(addressDetails);
 
  return (
    <>
      {addressDetails && Object.keys(addressDetails).length > 0 ? (
        <div>
         {console.log(addressDetails)}
            <Card
              key={addressDetails._id}
              style={{ width: "18rem", marginBottom: "10px" }}
            >
              <Card.Body>
                <Card.Title>{addressDetails.building}</Card.Title>
                <Card.Text>
                  <strong>Locality:</strong> {addressDetails.locality}
                  <br />
                  <strong>City:</strong> {addressDetails.city}
                  <br />
                  <strong>State:</strong> {addressDetails.state}
                  <br />
                  <strong>Pincode:</strong> {addressDetails.pincode}
                  <br />
                  <strong>Country:</strong> {addressDetails.country}
                </Card.Text>
              </Card.Body>
            </Card>
          
          <Button onClick={() => setToogleEditAddress(true)}>
            Edit
          </Button>
        </div>
      ) : (
        toggleAddAddress && <AddAddress />
      )}

      <div>
        {toggleAddAddress ? (
          <Button onClick={() => setToggleAddAddress(!toggleAddAddress)}>
            {toggleAddAddress ? "Cancel" : <AddAddress/> }
          </Button>
        ) : (
          Object.keys(addressDetails).length === 0 && (
            <Button onClick={() => setToggleAddAddress(!toggleAddAddress)}>
              Add Address
            </Button>
          )
        )}  
        {toggleEditAddress ? <AddAddress/> : <Button onClick={() => setToogleEditAddress(false)}>Cancel Edit</Button>} 
      </div>
    </>
  );
}


