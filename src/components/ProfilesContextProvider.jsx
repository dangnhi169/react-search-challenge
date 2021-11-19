import React, { useEffect } from 'react';

import { formatData, USER_PROFILES_API } from './util';

export const ProfileContext = React.createContext({
  profiles: [],
});

function ProfilesReducer(state, action) {
  let profiles;

  switch (action.type) {
    case 'ascending':
      profiles = [...state.profiles];
      profiles.sort((profileA, profileB) => (profileA.handle > profileB.handle ? 1 : -1));
      return { ...state, profiles, ascending: true, descending: false };
    case 'descending':
      profiles = [...state.profiles];
      profiles.sort((profileA, profileB) => (profileA.handle < profileB.handle ? 1 : -1));
      return { ...state, profiles, ascending: false, descending: true };
    case 'dataLoading':
      return {
        ...state,
        loading: true,
      };
    case 'dataLoadingSuccess':
      return {
        ...state,
        profiles: action.newData,
        error: false,
        loading: false,
      };
    case 'dataLoadingError':
      return {
        ...state,
        profiles: [],
        error: true,
        loading: false,
      };
    default:
      throw new Error();
  }
}

function ProfilesContextProvider({ children }) {
  const [state, dispatch] = React.useReducer(ProfilesReducer, {
    profiles: [],
    error: false,
    loading: false,
    ascending: false,
    descending: false,
  });

  // fetch data from the given API
  const fetchData = () => {
    dispatch({ type: 'dataLoading' });
    fetch(USER_PROFILES_API)
      .then((data) => data.json())
      .then((obj) => {
        if (obj && obj.results && Array.isArray(obj.results)) {
          return obj.results.map((profile) => formatData(profile));
        }
        return [];
      })
      .then((newData) => {
        dispatch({ type: 'dataLoadingSuccess', newData });
      })
      .catch((error) => {
        dispatch({ type: 'dataLoadingError', error: error });
      });
  };

  // apply filter after data is done loading
  useEffect(() => {
    if (state.loading === false && state.error === false) {
      state.ascending && dispatch({ type: 'ascending' });
      state.descending && dispatch({ type: 'descending' });
    }
  }, [state.loading]);

  // fetch data
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ProfileContext.Provider value={{ ...state, dispatch, fetchData }}>
      {children}
    </ProfileContext.Provider>
  );
}

export default ProfilesContextProvider;
