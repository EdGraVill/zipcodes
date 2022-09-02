import { GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';
import { getPlacesByCity, getPlacesByZip } from '../services';
import { GraphQLPlace, GraphQLSupportedCountriesEnum } from './place';

export const GraphQLRootQuery = new GraphQLObjectType({
  fields: () => ({
    placeByCity: {
      args: {
        city: {
          type: new GraphQLNonNull(GraphQLString),
        },
        country: {
          type: new GraphQLNonNull(GraphQLSupportedCountriesEnum),
        },
        state: {
          type: new GraphQLNonNull(GraphQLString),
        },
      },
      async resolve(src, { city, country, state }) {
        return getPlacesByCity(country, state, city);
      },
      type: new GraphQLNonNull(new GraphQLList(GraphQLPlace)),
    },
    placeByZip: {
      args: {
        country: {
          type: new GraphQLNonNull(GraphQLSupportedCountriesEnum),
        },
        zip: {
          type: new GraphQLNonNull(GraphQLString),
        },
      },
      async resolve(src, { country, zip }) {
        return getPlacesByZip(country, zip);
      },
      type: new GraphQLNonNull(new GraphQLList(GraphQLPlace)),
    },
  }),
  name: 'GraphQLRootQuery',
});
