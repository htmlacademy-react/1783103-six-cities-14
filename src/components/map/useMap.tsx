import { useState, useRef, useEffect,MutableRefObject } from 'react';
import leaflet, { Map } from 'leaflet';
import { OffersType } from '../../types/offers-types';

function useMap(mapRef:MutableRefObject <HTMLElement | null>, offers:OffersType[]) {
  const [map, setMap] = useState<null | Map> (null);
  const isRenderedRef = useRef(false);


  useEffect(() => {

    if (mapRef.current && !isRenderedRef.current) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: offers[0].location.latitude,
          lng: offers[0].location.longitude,
        },
        zoom: 12,
      });

      leaflet
        .tileLayer(
          'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
          {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          },
        )
        .addTo(instance);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, offers]);
  return map;
}

export default useMap;

