import { useState, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import L from 'leaflet';
import { useSnackbar } from 'notistack';
import 'leaflet-routing-machine/dist/leaflet-routing-machine';
import { useDispatch, useSelector } from 'react-redux';
import { startGetAddress } from "../../actions/addressAction";
import warehouseIcon from "../images/warehouseIcon.jpg"; 
import houseIcon from "../images/house.jpg"; // Import house icon image

const MapComponent = ({ userId }) => {
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();
    const address = useSelector((state) => state.address);
    const [userAddress, setUserAddress] = useState([]);

    // Define the warehouse address
    const warehouseAddress = [13.7409467, 76.905738];

    useEffect(() => {
        if (Object.keys(address).length > 0) {
            const coordinates = address.location?.coordinates || [];
            setUserAddress([coordinates[1], coordinates[0]]);
        }
    }, [address]);
    useEffect(() => {
        if (userAddress.length > 0) {
            const map = L.map('map').setView([0, 0], 2);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

            const warehouseMarkerIcon = L.icon({
                iconUrl: warehouseIcon,
                iconSize: [38, 38],
            });

            const houseMarkerIcon = L.icon({
                iconUrl: houseIcon,
                iconSize: [38, 38],
            });

            L.marker(userAddress, { icon: houseMarkerIcon }).addTo(map).bindPopup('User Address');
            L.marker(warehouseAddress, { icon: warehouseMarkerIcon }).addTo(map).bindPopup('Warehouse provider Address');

            L.Routing.control({
                waypoints: [
                    L.latLng(userAddress),
                    L.latLng(warehouseAddress)
                ],
                routeWhileDragging: true
            }).addTo(map);
        }
    }, [userAddress]);

    return (
        <div id="map" style={{ width: '100%', height: '400px' }} />
    );
};

export default MapComponent;

// import { useState, useEffect } from 'react';
// import 'leaflet/dist/leaflet.css';
// import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
// import L from 'leaflet';
// import { useSnackbar } from 'notistack';
// import 'leaflet-routing-machine/dist/leaflet-routing-machine';
// import { useDispatch, useSelector } from 'react-redux';
// import { startGetAddress } from "../../actions/addressAction";
// import warehouseIcon from "../images/warehouseIcon.jpg"; 
// import houseIcon from "../images/house.jpg"; // Import house icon image

// const MapComponent = ({ userId }) => {
//     const dispatch = useDispatch();
//     const { enqueueSnackbar } = useSnackbar();
//     const address = useSelector((state) => state.address);
//     const [userAddress, setUserAddress] = useState([]);
//     const [markers, setMarkers] = useState([]);

//     // Define the warehouse address
//     const warehouseAddress = [13.7409467, 76.905738];

//     useEffect(() => {
//         if (Object.keys(address).length > 0) {
//             const coordinates = address.location?.coordinates || [];
//             setUserAddress([coordinates[1], coordinates[0]]);
//         }
//     }, [address]);

//     useEffect(() => {
//         if (userAddress.length > 0) {
//             const map = L.map('map').setView([0, 0], 2);
//             L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//             const warehouseMarkerIcon = L.icon({
//                 iconUrl: warehouseIcon,
//                 iconSize: [38, 38],
//             });

//             const houseMarkerIcon = L.icon({
//                 iconUrl: houseIcon,
//                 iconSize: [38, 38],
//             });

//             // Remove old markers when component unmounts
//             return () => {
//                 markers.forEach(marker => marker.remove());
//             };

//         }
//     }, []);

//     useEffect(() => {
//         if (userAddress.length > 0) {
//             const map = L.map('map').setView([0, 0], 2);

//             // Remove old markers when new markers are added
//             markers.forEach(marker => marker.remove());

//             L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//             const warehouseMarker = L.marker(warehouseAddress, { icon: warehouseMarkerIcon }).addTo(map).bindPopup('Warehouse provider Address');
//             const userMarker = L.marker(userAddress, { icon: houseMarkerIcon }).addTo(map).bindPopup('User Address');

//             setMarkers([warehouseMarker, userMarker]);

//             L.Routing.control({
//                 waypoints: [
//                     L.latLng(userAddress),
//                     L.latLng(warehouseAddress)
//                 ],
//                 routeWhileDragging: true
//             }).addTo(map);
//         }
//     }, [userAddress]);

//     return (
//         <div id="map" style={{ width: '100%', height: '400px' }} />
//     );
// };

// export default MapComponent;

