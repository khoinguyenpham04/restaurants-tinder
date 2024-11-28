import React, { useEffect, useRef } from 'react';
import Map, { Marker, NavigationControl, FullscreenControl } from 'react-map-gl';
import { MapPin } from 'lucide-react';
import 'mapbox-gl/dist/mapbox-gl.css';

interface RestaurantMapProps {
  coordinates: {
    lat: number;
    lng: number;
  };
  name: string;
}

export const RestaurantMap: React.FC<RestaurantMapProps> = ({ coordinates, name }) => {
  const mapRef = useRef(null);
  const MAPBOX_TOKEN = 'pk.eyJ1Ijoia2hvbmd1eWVucGhhbSIsImEiOiJjbTNjMTVoenoxcTY4MnZzY2t5bzRoNHJhIn0._skFXKA9pyXNjaa-tlN_1A';

  return (
    <div className="relative h-[300px] rounded-lg overflow-hidden">
      <Map
        ref={mapRef}
        mapboxAccessToken={MAPBOX_TOKEN}
        initialViewState={{
          longitude: coordinates.lng,
          latitude: coordinates.lat,
          zoom: 14
        }}
        style={{ width: '100%', height: '100%' }}
        mapStyle="mapbox://styles/mapbox/streets-v12"
      >
        <Marker
          longitude={coordinates.lng}
          latitude={coordinates.lat}
          anchor="bottom"
        >
          <div className="relative group">
            <MapPin className="w-8 h-8 text-purple-600 -mt-4 cursor-pointer transform transition-transform group-hover:scale-110" />
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-white rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              <p className="text-sm font-medium text-gray-900">{name}</p>
            </div>
          </div>
        </Marker>
        <NavigationControl position="bottom-right" />
        <FullscreenControl position="top-right" />
      </Map>
      
      <a
        href={`https://www.google.com/maps/search/?api=1&query=${coordinates.lat},${coordinates.lng}`}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-full shadow-md flex items-center gap-2 hover:bg-gray-50 transition-colors"
      >
        <MapPin className="w-4 h-4 text-purple-600" />
        <span className="text-sm font-medium text-gray-900">Open in Google Maps</span>
      </a>
    </div>
  );
};