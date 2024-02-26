import {
  APIProvider,
  Map,
  AdvancedMarker,
  InfoWindow,
} from '@vis.gl/react-google-maps';
import { useState } from 'react';

function GoogleMap() {
  const position = { lat: 27.40587298215721, lng: -97.40198110868528 };
  const position2 = { lat: 33.20054811476981, lng: -100.1267731035452 }; // 3399 Wines Lane, TX  const [open, setOpen] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <APIProvider apiKey={import.meta.env.VITE_APP_GOOGLE_MAPS_API_KEY}>
      <div className="myContainer">
        <div className="h-[367px] md:h-[560px] mt-[3.5rem] md:mt-[14.25rem] md:mb-[12.5rem] lg:mt-[12.5rem] lg:mb-[10rem]">
          <Map zoom={5} center={position} mapId="606eea6684823902">
            <AdvancedMarker
              position={position}
              onClick={() => setOpen(true)}
            ></AdvancedMarker>
            <AdvancedMarker
              position={position2}
              onClick={() => setOpen(true)}
            ></AdvancedMarker>
            {open && (
              <InfoWindow>
                <p>I'm in Hamburg</p>
              </InfoWindow>
            )}
          </Map>
        </div>
      </div>
    </APIProvider>
  );
}

export default GoogleMap;
