import React, {useContext, useEffect, useState} from 'react';
import '../../utils/fix-map-icon'
import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet';

import './Map.css';
import 'leaflet/dist/leaflet.css';

export const Map = () => {

    return (
        <div className='map'>
            <MapContainer center={[51.0451318,20.176074]} zoom={13} >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href='https://www.openstreetmap.org/opyright'>OpenStreetMap</a> & contributors"
                />

                <Marker position={[51.0451318,20.176074]}>
                    <Popup>
                        <h2>TEST 💙</h2>
                        <p>Test pin</p>
                    </Popup>
                </Marker>

            </MapContainer>
        </div>
    );
};