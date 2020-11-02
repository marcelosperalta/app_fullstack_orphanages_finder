import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
// import Leaflet, { icon } from 'leaflet';

// movido para App.tsx
//import 'leaflet/dist/leaflet.css'

import mapMarketImg from '../images/map-marker.svg';
import mapIcon from '../utils/mapIcon';
import api from "../services/api";

import '../styles/pages/orphanages-map.css';
// import App from '../App';

interface Orphanage {
    id: number;
    latitude: number;
    longitude: number;
    name: string;
}

// movido para mapIcon.ts (src/utils)
// const mapIcon = Leaflet.icon({
//     iconUrl: mapMarketImg,
//     iconSize: [58, 68],
//     iconAnchor: [29, 68],
//     popupAnchor: [170, 2]
// })

function OrphanagesMap() {
    const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

    console.log(orphanages);

    useEffect(() => {
        api.get('orphanages').then(response => {
            setOrphanages(response.data);
        });
    }, []);

    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarketImg} alt="Happy"/>

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>Berlim</strong>
                    <span>Alemanha</span>
                </footer>
            </aside>

            <Map
                center={[52.5067614,13.2846514]}
                zoom={11}
                style={{ width: '100%', height: '100%' }}
            >
                {/* TileLayer using https://www.openstreetmap.org/ */}
                {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}

                {/* TileLayer using https://www.mapbox.com/ */}
                {/* The access token was puted on ".env" file and the ".env" was added to .ignore */}
                {/* Never push access tokens or passwords to GitHub or any other version control tool */}
                <TileLayer 
                // dark:
                //url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                // light:
                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                // styles: https://docs.mapbox.com/mapbox-gl-js/api/map/
                />

            {orphanages.map(orphanage => {
                return (
                <Marker 
                    key={orphanage.id}
                    icon={mapIcon}
                    // position={[52.5067614,13.2846514]}
                    position={[orphanage.latitude, orphanage.longitude]}
                > 
                    <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                        {/* Jewish Orphanage Berlin-Pankow */}
                        {orphanage.name}
                        {/* <Link to="orphanages/1"> */}
                        <Link to={`orphanages/${orphanage.id}`}>
                            <FiArrowRight size={20} color="#FFF"/>
                        </Link>
                    </Popup>
                </Marker>
                )
            })}
            </Map>

            <Link to="/orphanages/create" className="create-orphanage">
                <FiPlus size={32} color="#fff" />
            </Link>
        </div>
    )
}

export default OrphanagesMap;