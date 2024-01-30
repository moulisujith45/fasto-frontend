import React from 'react';
import { Link } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPen } from '@fortawesome/free-solid-svg-icons';

function UserSideBar() {
    return (
        <div className="user_side_bar">
            <div className="user_side_bar_link">
                <Link to="/profile/update-profile">
                    <FontAwesomeIcon icon={faUserPen} size="2x" />
                    <p>Update Profile</p>
                </Link>
            </div>
        </div>
    );
}

export default UserSideBar;
