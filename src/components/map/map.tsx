import { Icon, Marker,layerGroup} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useRef, useEffect } from 'react';
import useMap from './useMap';

import { useAppSelector } from '../../hooks';

const URL_MARKER_DEFAULT = '../../../public/img/pin.svg';

const URL_MARKER_CURRENT = '../../../public/img/pin-active.svg';

type MapProps = {
  currentCityId: string | null;
  block: string;
}
const defaultIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const currentIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

function Map ({currentCityId,block}: MapProps) {

  const currentOffers = useAppSelector((state) => state.filteredOffers);

  const mapRef = useRef(null);
  const map = useMap(mapRef,currentOffers);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      currentOffers.forEach((currentOffer) => {
        const mapMarker = new Marker({
          lat: currentOffer.location.latitude,
          lng: currentOffer.location.longitude,
        });
        mapMarker
          .setIcon(
            currentOffer.id === currentCityId
              ? currentIcon
              : defaultIcon
          )
          .addTo(markerLayer);
      });
      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, currentOffers,currentCityId]);

  return (
    <section
      className={`${block}__map map`}
      style={{height: '500px'}}
      ref={mapRef}
    />
  );
}

export default Map;

