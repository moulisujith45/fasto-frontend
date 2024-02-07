import React from "react";
import UserProfile from "./UserProfile";
import { Row } from 'react-bootstrap'
import { useState } from "react";
import UserSideBar from "./UserSideBar";


export default function CustomerProfile(profile) {
    return (
        <div>
            <UserProfile/>
        </div>
    )
    // // Your state and effect hooks go here
    // const [activepage, setActivepage] = useState(null)
    // return (
    //     <>
    //     <div className="collapse" id="navbarToggleExternalContent" data-bs-theme="dark">
    //         <div className="bg-dark p-4">
    //             <h5 className="text-body-emphasis h4">Collapsed content</h5>
    //             <span className="text-body-secondary">Toggleable via the navbar brand.</span>
    //         </div>
    //     </div>
    //     <nav className="navbar navbar-dark bg-dark">
    //         <div className="container-fluid">
    //             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
    //                 <span className="navbar-toggler-icon"></span>
    //             </button>
    //             <Row className="user_profile">
    //                 <div className="user_profile_In">
    //                     <div className="user_profile_left">
    //                         <UserSideBar />
    //                     </div>
    //                     <div className="user_profile_right">
    //                         { activepage === "update-profile" && <UserProfile profile={profile} /> }
    //                         {/* { activepage === "address-form" && <AddressForm userAddress={userAddress} /> }
    //                         { activepage === "my-orders" && <MyOrders /> }
    //                         { activepage === "latest-orders" && <LatestOrders /> }
    //                         { activepage === "accepted-orders" && <AcceptedOrders /> }
    //                         { activepage === "categories-add" && <AddCategories /> }
    //                         { activepage === "service-approve" && <ServiceApprove /> } */}
    //                     </div>
    //                 </div>
    //             </Row>
    //         </div>
    //     </nav>
    // </>
    
    // );
}
