import { Button, Card, Typography } from '@mui/material';
import type { FC } from 'react';
import { useCallback } from 'react';
import { useEffect, useRef, useState } from 'react';
import type { Place } from '../services';

interface Props {
  fetchZip(country: string, zip: string): void;
  places?: Place[];
}

const History: FC<Props> = ({ fetchZip, places }) => {
  const history = useRef<string[]>(JSON.parse(localStorage.getItem('zipHistory') ?? '[]'));
  const [last, setLast] = useState(history.current[history.current.length - 1] || null);

  useEffect(() => {
    setTimeout(() => {
      history.current = JSON.parse(localStorage.getItem('zipHistory') ?? '[]');
      if (history.current[history.current.length - 1]) {
        setLast(history.current[history.current.length - 1]);
      }
    }, 500);
  }, [places]);

  const onClick = useCallback(
    (country: string, zip: string) => () => {
      fetchZip(country, zip);
    },
    [],
  );

  const clearHistory = useCallback(() => {
    localStorage.removeItem('zipHistory');
    history.current = [];
    setLast(null);
  }, []);

  const other = [...history.current].slice(-5).reverse();
  other.shift();

  return (
    <>
      {last && (
        <Button onClick={clearHistory} size="small" sx={{ alignSelf: 'flex-end' }}>
          Clear History
        </Button>
      )}
      {last && (
        <Card sx={{ marginTop: '0.5rem', padding: '0.5rem', textAlign: 'center', transform: 'scale(0.95)' }}>
          <Button onClick={onClick(...(last.split(':') as [string, string]))}>
            <Typography variant="h6">{last.split(':')[1]}</Typography>
          </Button>
        </Card>
      )}
      {other.map((czip, ix) => (
        <Card
          key={czip}
          sx={{
            marginTop: `${0.5 - (1 + ix) / 4}rem`,
            opacity: 1 - (ix + 1) / 10,
            padding: '0.5rem',
            textAlign: 'center',
            transform: `scale(${0.9 - ix / 20})`,
          }}
        >
          <Button onClick={onClick(...(czip.split(':') as [string, string]))}>
            <Typography variant="h6">{czip.split(':')[1]}</Typography>
          </Button>
        </Card>
      ))}
    </>
  );
};

export default History;
