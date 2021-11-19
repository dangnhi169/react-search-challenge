import React, { useState, useEffect } from 'react';
import SearchPage from './SearchPage';
import ProfilesContextProvider from './ProfilesContextProvider';
import { REFRESH_RATE } from './util';
import '../styles.css';

function HomePage() {
  const [seconds, setSeconds] = useState(REFRESH_RATE);
  const [refreshEnabled, setRefreshEnabled] = useState(true);

  useEffect(() => {
    if (refreshEnabled) {
      if (seconds >= 0) {
        const timer = setTimeout(() => setSeconds(seconds - 1), 1000);
        return () => clearTimeout(timer);
      } else {
        setSeconds(10);
      }
    }
  }, [refreshEnabled, seconds]);

  const toggleTimer = () => {
    setRefreshEnabled((refreshEnabled) => setRefreshEnabled(!refreshEnabled));
    setSeconds(10);
  };

  return (
    <ProfilesContextProvider>
      <SearchPage
        countDownTime={seconds}
        refreshEnabled={refreshEnabled}
        toggleTimer={toggleTimer}
      />
    </ProfilesContextProvider>
  );
}

export default HomePage;
