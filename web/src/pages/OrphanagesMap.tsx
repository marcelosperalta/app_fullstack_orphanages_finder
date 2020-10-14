import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css'

import mapMarketImg from '../images/map-marker.svg';

import '../styles/pages/orphanages-map.css';

function OrphanagesMap() {
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
            </Map>

            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#fff" />
            </Link>
        </div>
    )
}

export default OrphanagesMap;