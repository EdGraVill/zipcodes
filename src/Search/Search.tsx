import type { SelectChangeEvent } from '@mui/material';
import { TextField } from '@mui/material';
import { Card, FormControl, MenuItem, Select } from '@mui/material';
import type { ChangeEvent, Dispatch, FC, SetStateAction } from 'react';
import { useCallback } from 'react';
import type { Place } from '../services';
import { supportedCountries } from '../services';
import History from './History';
import styles from './styles.module.css';

interface Props {
  country: string;
  fetchZip(country: string, zip: string): void;
  places?: Place[];
  setCountry: Dispatch<SetStateAction<string>>;
  setZip: Dispatch<SetStateAction<string>>;
  zip: string;
}

const Search: FC<Props> = ({ country, fetchZip, places, setCountry, setZip, zip }) => {
  const onCountryChange = useCallback(
    (event: SelectChangeEvent<string>) => {
      localStorage.setItem('country', event.target.value);
      setCountry(event.target.value ?? supportedCountries.us.code);
    },
    [setCountry],
  );

  const onZipChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setZip(event.currentTarget.value ?? '');
    },
    [setZip],
  );

  return (
    <FormControl sx={{ alignItems: 'stretch', display: 'flex', flexDirection: 'column' }}>
      <Card
        sx={{ alignItems: 'stretch', display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', marginTop: '3rem' }}
      >
        <Select SelectDisplayProps={{ className: styles.selectDisplay }} onChange={onCountryChange} value={country}>
          {Object.keys(supportedCountries).map((code) => {
            const country = supportedCountries[code as keyof typeof supportedCountries];

            return (
              <MenuItem key={country.code} sx={{ alignItems: 'center', display: 'flex' }} value={country.code}>
                <img alt={country.name} className={styles.flag} src={country.flag} />
                <span>{country.name}</span>
              </MenuItem>
            );
          })}
        </Select>
        <TextField
          inputProps={{ style: { textAlign: 'center' } }}
          onChange={onZipChange}
          placeholder="ZIP"
          value={zip}
          variant="outlined"
        />
      </Card>
      <History fetchZip={fetchZip} places={places} />
    </FormControl>
  );
};

export default Search;
