import { gql, useLazyQuery } from '@apollo/client';
import type { Dispatch, FC, SetStateAction } from 'react';
import { useCallback } from 'react';
import { useEffect, useState } from 'react';
import Map from './Map';
import Search from './Search';
import type { Place } from './services';
import { supportedCountries } from './services';

function useDebouncedState<T>(
  debounceTime: number,
  initialState?: T,
): [debouncedState: T, liveState: T, setState: Dispatch<SetStateAction<T>>] {
  const [debouncedState, setDebouncedState] = useState(initialState as T);
  const [liveState, setLiveState] = useState(initialState as T);

  useEffect(() => {
    const timeout = setTimeout(() => setDebouncedState(liveState), debounceTime);

    return () => {
      clearTimeout(timeout);
    };
  }, [liveState]);

  return [debouncedState, liveState, setLiveState];
}

const App: FC = () => {
  const [country, setCountry] = useState(localStorage.getItem('country') || supportedCountries.us.code);
  const [dZip, lZip, setZip] = useDebouncedState(400, '');

  const [fetchQuery, { data }] = useLazyQuery<Record<'places', Place[]>>(
    gql`
      query placeByZipLight($country: CountryEnum!, $zip: String!) {
        places: placeByZip(country: $country, zip: $zip) {
          country
          latitude
          longitude
          name
          stateAbbreviation
          zip
        }
      }
    `,
  );

  useEffect(() => {
    if (country && dZip) {
      fetchQuery({ variables: { country, zip: dZip } });
    }
  }, [country, dZip]);

  useEffect(() => {
    if (data) {
      const history: string[] = JSON.parse(localStorage.getItem('zipHistory') ?? '[]');

      if (!history[history.length - 1] || history[history.length - 1] !== data.places[0].zip) {
        const czip = `${country}:${data.places[0].zip}`;
        localStorage.setItem('zipHistory', JSON.stringify([...history.filter((key) => key !== czip), czip]));
      }
    }
  }, [country, data]);

  const fetchZip = useCallback(
    (c: string, z: string) => {
      fetchQuery({ variables: { country: c, zip: z } });
      setZip(z);
    },
    [fetchQuery],
  );

  return (
    <Map places={data?.places}>
      <Search
        country={country}
        fetchZip={fetchZip}
        places={data?.places}
        setCountry={setCountry}
        setZip={setZip}
        zip={lZip}
      />
    </Map>
  );
};

export default App;
