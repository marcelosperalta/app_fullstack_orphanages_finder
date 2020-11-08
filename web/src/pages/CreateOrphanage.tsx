import React, { useState, FormEvent } from "react";
import { Map, Marker, TileLayer } from 'react-leaflet';
import { LeafletMouseEvent } from 'leaflet';
// import L from 'leaflet';
// import { useHistory } from "react-router-dom";

// import { FiArrowLeft, FiPlus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";

// import mapMarkerImg from '../images/map-marker.svg';
import Sidebar from "../components/Sidebar";
import mapIcon from "../utils/mapIcon";

import '../styles/pages/create-orphanage.css';

// movido para mapIcon.ts (src/utils)
// const happyMapIcon = L.icon({
//   iconUrl: mapMarkerImg,

//   iconSize: [58, 68],
//   iconAnchor: [29, 68],
//   popupAnchor: [0, -60]
// })

// export default function CreateOrphanage() {
export default function OrphanagesMap() {
  // const { goBack } = useHistory();

  const [position, setPosition] = useState({ latitude: 0, longitude: 0 })

  const [name, setName] = useState('');
  const [about, setAbout] = useState('');
  const [instructions, setInstructions] = useState('');
  const [opening_hours, setOpeningHours] = useState('');
  const [open_on_weekends, setOpenOnWeekends] = useState(true);

  function handleMapClick(event: LeafletMouseEvent) {
    // console.log(event.latlng);

    const { lat, lng } = event.latlng;

    setPosition({
      latitude: lat,
      longitude: lng,
    });
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    console.log({
      position,
      name,
      about,
      instructions,
      opening_hours,
    })
  }

  return (
    <div id="page-create-orphanage">
      <Sidebar />

      {/* movido para Sidebar.txt (src/components) */}
      {/* <aside>
        <img src={mapMarkerImg} alt="Happy" />

        <footer>
          <button type="button" onClick={goBack}>
            <FiArrowLeft size={24} color="#FFF" />
          </button>
        </footer>
      </aside> */}

      <main>
        <form onSubmit={handleSubmit} className="create-orphanage-form">
          <fieldset>
            <legend>Dados</legend>

            <Map 
              center={[-27.2092052,-49.6401092]} 
              style={{ width: '100%', height: 280 }}
              zoom={15}
              onclick={handleMapClick}
            >
              <TileLayer 
                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
              />

              {/* { position.latitude != 0 
              ? <Marker interactive={false} icon={mapIcon} position={[position.latitude,position.longitude]} />
              : null
              } */}
              { position.latitude != 0 && (
                <Marker 
                  interactive={false} 
                  icon={mapIcon} 
                  position={[
                    position.latitude,
                    position.longitude
                  ]} 
                />
              )}

              {/* <Marker interactive={false} icon={happyMapIcon} position={[-27.2092052,-49.6401092]} /> */}
              {/* <Marker interactive={false} icon={mapIcon} position={[-27.2092052,-49.6401092]} /> */}
            </Map>

            <div className="input-block">
              <label htmlFor="name">Nome</label>
              <input 
                id="name" 
                value={name} 
                onChange={event => setName(event.target.value)} 
              />
            </div>

            <div className="input-block">
              <label htmlFor="about">Sobre <span>Máximo de 300 caracteres</span></label>
              <textarea 
                id="name" 
                maxLength={300} 
                value={about} 
                onChange={event => setAbout(event.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="images">Fotos</label>

              <div className="uploaded-image">

              </div>

              <button className="new-image">
                <FiPlus size={24} color="#15b6d6" />
              </button>
            </div>
          </fieldset>

          <fieldset>
            <legend>Visitação</legend>

            <div className="input-block">
              <label htmlFor="instructions">Instruções</label>
              <textarea 
                id="instructions" 
                value={instructions} 
                onChange={event => setInstructions(event.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="opening_hours">Horário de funcionamento</label>
              <input 
                id="opening_hours" 
                value={opening_hours} 
                onChange={event => setOpeningHours(event.target.value)}
                 />
            </div>

            <div className="input-block">
              <label htmlFor="open_on_weekends">Atende fim de semana</label>

              <div className="button-select">
                <button 
                  type="button" 
                  // className="active"
                  className={open_on_weekends ? "active" : ""}
                  onClick={() => setOpenOnWeekends(true)}
                >
                  Sim
                </button>
                <button 
                  type="button"
                  className={!open_on_weekends ? "active" : ""}
                  onClick={() => setOpenOnWeekends(false)}
                >
                  Não
                </button>
              </div>
            </div>
          </fieldset>

          <button className="confirm-button" type="submit">
            Confirmar
          </button>
        </form>
      </main>
    </div>
  );
}

// return `https://a.tile.openstreetmap.org/${z}/${x}/${y}.png`;
