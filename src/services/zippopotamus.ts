import axios from 'axios';

export const supportedCountries = {
  ad: { code: 'AD', flag: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Andorra.svg', name: 'Andorra' },
  ar: {
    code: 'AR',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg',
    name: 'Argentina',
  },
  as: {
    code: 'AS',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Flag_of_American_Samoa.svg',
    name: 'American Samoa',
  },
  at: { code: 'AT', flag: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_Austria.svg', name: 'Austria' },
  au: {
    code: 'AU',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29.svg',
    name: 'Australia',
  },
  bd: {
    code: 'BD',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Flag_of_Bangladesh.svg',
    name: 'Bangladesh',
  },
  be: { code: 'BE', flag: 'https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Belgium.svg', name: 'Belgium' },
  bg: {
    code: 'BG',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Bulgaria.svg',
    name: 'Bulgaria',
  },
  br: { code: 'BR', flag: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg', name: 'Brazil' },
  ca: {
    code: 'CA',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg',
    name: 'Canada',
  },
  ch: {
    code: 'CH',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Flag_of_Switzerland_%28Pantone%29.svg',
    name: 'Switzerland',
  },
  cz: {
    code: 'CZ',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_Czech_Republic.svg',
    name: 'Czech Republic',
  },
  de: { code: 'DE', flag: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg', name: 'Germany' },
  dk: { code: 'DK', flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Denmark.svg', name: 'Denmark' },
  do: {
    code: 'DO',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_the_Dominican_Republic.svg',
    name: 'Dominican Republic',
  },
  es: {
    code: 'ES',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Bandera_de_Espa%C3%B1a.svg',
    name: 'Spain',
  },
  fi: { code: 'FI', flag: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Finland.svg', name: 'Finland' },
  fo: {
    code: 'FO',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Flag_of_the_Faroe_Islands.svg',
    name: 'Faroe Islands',
  },
  fr: {
    code: 'FR',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%2C_2020%E2%80%93present%29.svg',
    name: 'France',
  },
  gb: {
    code: 'GB',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Flag_of_the_United_Kingdom.svg',
    name: 'Great Britain',
  },
  gf: {
    code: 'GF',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%2C_2020%E2%80%93present%29.svg',
    name: 'French Guyana',
  },
  gg: {
    code: 'GG',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_Guernsey.svg',
    name: 'Guernsey',
  },
  gl: {
    code: 'GL',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_Greenland.svg',
    name: 'Greenland',
  },
  gp: {
    code: 'GP',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Flag_of_Guadeloupe_%28local%29_variant.svg',
    name: 'Guadeloupe',
  },
  gt: {
    code: 'GT',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Flag_of_Guatemala.svg',
    name: 'Guatemala',
  },
  gu: { code: 'GU', flag: 'https://upload.wikimedia.org/wikipedia/commons/0/07/Flag_of_Guam.svg', name: 'Guam' },
  gy: { code: 'GY', flag: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Flag_of_Guyana.svg', name: 'Guyana' },
  hr: { code: 'HR', flag: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Flag_of_Croatia.svg', name: 'Croatia' },
  hu: { code: 'HU', flag: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Flag_of_Hungary.svg', name: 'Hungary' },
  im: {
    code: 'IM',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_the_Isle_of_Man.svg',
    name: 'Isle of Man',
  },
  in: { code: 'IN', flag: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg', name: 'India' },
  is: { code: 'IS', flag: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Iceland.svg', name: 'Iceland' },
  it: { code: 'IT', flag: 'https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg', name: 'Italy' },
  je: { code: 'JE', flag: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Flag_of_Jersey.svg', name: 'Jersey' },
  jp: { code: 'JP', flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Flag_of_Japan.svg', name: 'Japan' },
  li: {
    code: 'LI',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/4/47/Flag_of_Liechtenstein.svg',
    name: 'Liechtenstein',
  },
  lk: {
    code: 'LK',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Flag_of_Sri_Lanka.svg',
    name: 'Sri Lanka',
  },
  lt: {
    code: 'LT',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Flag_of_Lithuania.svg',
    name: 'Lithuania',
  },
  lu: {
    code: 'LU',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/d/da/Flag_of_Luxembourg.svg',
    name: 'Luxembourg',
  },
  mc: { code: 'MC', flag: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Flag_of_Monaco.svg', name: 'Monaco' },
  md: { code: 'MD', flag: 'https://upload.wikimedia.org/wikipedia/commons/2/27/Flag_of_Moldova.svg', name: 'Moldavia' },
  mh: {
    code: 'MH',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Flag_of_the_Marshall_Islands.svg',
    name: 'Marshall Islands',
  },
  mk: {
    code: 'MK',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/7/79/Flag_of_North_Macedonia.svg',
    name: 'Macedonia',
  },
  mp: {
    code: 'MP',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Flag_of_the_Northern_Mariana_Islands.svg',
    name: 'Northern Mariana Islands',
  },
  mq: {
    code: 'MQ',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Flag_of_Martinique_%28Local%29.svg',
    name: 'Martinique',
  },
  mx: { code: 'MX', flag: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg', name: 'Mexico' },
  my: {
    code: 'MY',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/6/66/Flag_of_Malaysia.svg',
    name: 'Malaysia',
  },
  nl: {
    code: 'NL',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg',
    name: 'Holland',
  },
  no: { code: 'NO', flag: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Norway.svg', name: 'Norway' },
  nz: {
    code: 'NZ',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Flag_of_New_Zealand.svg',
    name: 'New Zealand',
  },
  ph: {
    code: 'PH',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Flag_of_the_Philippines.svg',
    name: 'Phillippines',
  },
  pk: {
    code: 'PK',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/3/32/Flag_of_Pakistan.svg',
    name: 'Pakistan',
  },
  pl: { code: 'PL', flag: 'https://upload.wikimedia.org/wikipedia/commons/1/12/Flag_of_Poland.svg', name: 'Poland' },
  pm: {
    code: 'PM',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/7/74/Flag_of_Saint-Pierre_and_Miquelon.svg',
    name: 'Saint Pierre and Miquelon',
  },
  pr: {
    code: 'PR',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/2/28/Flag_of_Puerto_Rico.svg',
    name: 'Puerto Rico',
  },
  pt: {
    code: 'PT',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg',
    name: 'Portugal',
  },
  re: {
    code: 'RE',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%2C_2020%E2%80%93present%29.svg',
    name: 'French Reunion',
  },
  ru: { code: 'RU', flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Russia.svg', name: 'Russia' },
  se: { code: 'SE', flag: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Flag_of_Sweden.svg', name: 'Sweden' },
  si: {
    code: 'SI',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Civil_ensign_of_Slovenia.svg',
    name: 'Slovenia',
  },
  sj: {
    code: 'SJ',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Norway.svg',
    name: 'Svalbard & Jan Mayen Islands',
  },
  sk: {
    code: 'SK',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Flag_of_Slovakia.svg',
    name: 'Slovak Republic',
  },
  sm: {
    code: 'SM',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Flag_of_San_Marino.svg',
    name: 'San Marino',
  },
  th: {
    code: 'TH',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_Thailand.svg',
    name: 'Thailand',
  },
  tr: { code: 'TR', flag: 'https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg', name: 'Turkey' },
  us: {
    code: 'US',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg',
    name: 'United States',
  },
  va: {
    code: 'VA',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_the_Vatican_City.svg',
    name: 'Vatican',
  },
  vi: {
    code: 'VI',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f8/Flag_of_the_United_States_Virgin_Islands.svg',
    name: 'Virgin Islands',
  },
  yt: {
    code: 'YT',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Flag_of_Mayotte_%28local%29.svg',
    name: 'Mayotte',
  },
  za: {
    code: 'ZA',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Flag_of_South_Africa.svg',
    name: 'South Africa',
  },
};

export type SupportedCountry = keyof typeof supportedCountries;

export interface Place {
  country: string;
  countryAbbreviation: SupportedCountry;
  latitude: number;
  longitude: number;
  name: string;
  state: string;
  stateAbbreviation: string;
  zip: string;
}

export function normalizeResponse(response: PlacesByZipResponse | PlacesByCityResponse): Array<Place> {
  return response.places.map((receivedPlace) => ({
    country: response.country,
    countryAbbreviation: response['country abbreviation'],
    latitude: Number(receivedPlace.latitude),
    longitude: Number(receivedPlace.longitude),
    name: receivedPlace['place name'],
    state: (receivedPlace as PlacesByZipResponse['places'][number])?.state ?? (response as PlacesByCityResponse).state,
    stateAbbreviation:
      (receivedPlace as PlacesByZipResponse['places'][number])?.['state abbreviation'] ??
      (response as PlacesByCityResponse)['state abbreviation'],
    zip:
      (receivedPlace as PlacesByCityResponse['places'][number])?.['post code'] ??
      (response as PlacesByZipResponse)['post code'],
  }));
}

export interface PlacesByZipResponse {
  country: string;
  'country abbreviation': SupportedCountry;
  places: Array<{
    latitude: string;
    longitude: string;
    'place name': string;
    state: string;
    'state abbreviation': string;
  }>;
  'post code': string;
}

export async function getPlacesByZip(country: SupportedCountry, zip: string): Promise<Place[]> {
  const response = await axios.get<PlacesByZipResponse>(`https://api.zippopotam.us/${country}/${zip}`);

  return normalizeResponse(response.data);
}

export interface PlacesByCityResponse {
  country: string;
  'country abbreviation': SupportedCountry;
  'place name': string;
  places: Array<{
    latitude: string;
    longitude: string;
    'place name': string;
    'post code': string;
  }>;
  state: string;
  'state abbreviation': string;
}

export async function getPlacesByCity(country: SupportedCountry, state: string, city: string): Promise<Place[]> {
  const response = await axios.get<PlacesByZipResponse>(`https://api.zippopotam.us/${country}/${state}/${city}`);

  return normalizeResponse(response.data);
}
