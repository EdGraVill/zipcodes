import type { Place } from '../services';

export function getCenterPoint(places: Place[]): google.maps.LatLng {
  const { LatLng } = window.google.maps as typeof google.maps;

  if (places.length === 0) {
    return new LatLng(37.7508, -122.4822);
  }

  if (places.length === 1) {
    return new LatLng(places[0].latitude, places[0].longitude);
  }

  const lats = places.map(({ latitude }) => latitude);
  const minLat = Math.min(...lats);
  const maxLat = Math.max(...lats);
  const midLat = (maxLat - minLat) / 2;

  const lngs = places.map(({ longitude }) => longitude);
  const minLng = Math.min(...lngs);
  const maxLng = Math.max(...lngs);
  const midLng = (maxLng - minLng) / 2;

  return new LatLng(minLat + midLat + 0.05, minLng + midLng);
}

export function placesToLatLng(places: Place[]): google.maps.LatLng[] {
  const { LatLng } = window.google.maps as typeof google.maps;

  return places.map(({ latitude, longitude }) => new LatLng(latitude, longitude));
}

export function getBounds(places: Place[]): google.maps.LatLngBounds {
  const { LatLngBounds } = window.google.maps as typeof google.maps;

  const bounds = new LatLngBounds();

  placesToLatLng(places).forEach((latlng) => {
    bounds.extend(latlng);
  });

  return bounds;
}
