import React from 'react';
import {GoogleMap, useLoadScript} from '@react-google-maps/api';
const libraries = ['places'];
const center = {
    lat: 37.5717975,
    lng: 126.9325254,
};
const Map = () => {
    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: 'AIzaSyCrQuKKwt0DtPF8vxKPx6dRq3us6me2LO8',
        libraries,
    });
    if (loadError) return <>'Error'</>;
    if (!isLoaded) return <>'Loading...'</>;
    return (
        <div>
            <GoogleMap id='map' zoom={14} center={center}></GoogleMap>
        </div>
    );
};
export default Map;