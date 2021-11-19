import _ from 'lodash';

/**
 * Format data to the desired given structure in profiles.json
 */
export const formatData = (rawData) => {
  return {
    photoUrl: _.get(rawData, 'picture.large', null),
    handle:
      _.has(rawData, 'name.first', null) && _.has(rawData, 'name.last', null)
        ? rawData.name.first + ' ' + rawData.name.last
        : null,
    location: _.get(rawData, 'location.city', null),
    age: _.get(rawData, 'dob.age', null),
    photoCount: _.get(rawData, 'registered.age', null),
    id: _.get(rawData, 'id.value', null),
  };
};

/****** CONSTANTS **********/
export const REFRESH_RATE = 10;
export const USER_PROFILES_API = 'https://randomuser.me/api/?page=1&results=12&seed=abc';
