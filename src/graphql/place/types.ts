import { GraphQLEnumType, GraphQLObjectType, GraphQLString } from 'graphql';
import type { Place } from '../../services';
import { supportedCountries } from '../../services';

export const GraphQLSupportedCountriesEnum = new GraphQLEnumType({
  name: 'CountryEnum',
  values: Object.keys(supportedCountries).reduce(
    (acc, code) => ({
      ...acc,
      [code.toUpperCase()]: { value: code },
    }),
    {},
  ),
});

export const GraphQLPlace = new GraphQLObjectType<Place>({
  fields: () => ({
    country: {
      resolve(src) {
        return src.country;
      },
      type: GraphQLString,
    },
    countryAbbreviation: {
      resolve(src) {
        return src.countryAbbreviation;
      },
      type: GraphQLString,
    },
    latitude: {
      resolve(src) {
        return src.latitude;
      },
      type: GraphQLString,
    },
    longitude: {
      resolve(src) {
        return src.longitude;
      },
      type: GraphQLString,
    },
    name: {
      resolve(src) {
        return src.name;
      },
      type: GraphQLString,
    },
    state: {
      resolve(src) {
        return src.state;
      },
      type: GraphQLString,
    },
    stateAbbreviation: {
      resolve(src) {
        return src.stateAbbreviation;
      },
      type: GraphQLString,
    },
    zip: {
      resolve(src) {
        return src.zip;
      },
      type: GraphQLString,
    },
  }),
  name: 'Place',
});
