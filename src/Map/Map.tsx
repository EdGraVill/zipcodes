import { Box } from '@mui/material';
import { Loader } from 'google-maps';
import type { FC } from 'react';
import { useState, useEffect, useRef } from 'react';
import type { Place } from '../services';
import styles from './styles';
import { getCenterPoint } from './util';

const loader = new Loader('AIzaSyCh5RX_crjEaWwlVp36q1y6kuz1y4z7Mhw');

interface Props {
  children?: JSX.Element;
  places?: Place[];
}

const Map: FC<Props> = ({ children, places }) => {
  const maps = useRef<typeof google.maps>(window?.google?.maps);
  const map = useRef<google.maps.Map<HTMLDivElement>>();
  const markers = useRef<google.maps.Marker[]>([]);
  const mapContainer = useRef<HTMLDivElement>(null);
  const [isLoaded, setLoadedState] = useState(false);

  useEffect(() => {
    loader.load().then((google) => {
      if (mapContainer.current) {
        maps.current = google.maps;
        map.current = new google.maps.Map(mapContainer.current, {
          center:
            places && places.length
              ? {
                  lat: places[0].latitude,
                  lng: places[0].longitude,
                }
              : { lat: 37.7508, lng: -122.4822 },
          disableDefaultUI: true,
          styles,
          zoom: 12,
        });
      }

      google.maps.event.addListenerOnce(map.current!, 'idle', () => {
        setLoadedState(true);
      });
    });
  }, []);

  useEffect(() => {
    if (places && isLoaded) {
      markers.current.forEach((marker) => marker.setMap(null));
      markers.current = places.map(({ latitude, longitude, name }) => {
        return new maps.current.Marker({
          optimized: true,
          position: new maps.current.LatLng(latitude, longitude),
          map: map.current!,
          title: name,
        });
      });

      map.current?.panTo(getCenterPoint(places));
    }
  }, [places, isLoaded]);

  return (
    <Box
      sx={{
        alignItems: 'flex-start',
        display: 'flex',
        height: '100vh',
        justifyContent: 'center',
        position: 'relative',
        width: '100vw',
      }}
    >
      <Box ref={mapContainer} sx={{ height: '100%', position: 'absolute', width: '100%', zIndex: -2 }} />
      {children}
    </Box>
  );
};

export default Map;
