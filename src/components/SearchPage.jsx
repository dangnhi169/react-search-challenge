import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ClipLoader from 'react-spinners/ClipLoader';

import { ProfileContext } from './ProfilesContextProvider';
import StyledButton from './StyledButton';
import MinimalButton from './MinimalButton';
import Header from './Header';
import SearchCard from './SearchCard';

const MainPage = styled.main`
  margin: 24px;
`;
const RightInfoGroup = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const FilterImg = styled.img`
  width: 22px;
`;
const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const SearchCardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 16px;
`;

function SearchPage(props) {
  const { countDownTime, refreshEnabled = true, toggleTimer } = props;
  const context = useContext(ProfileContext);
  const navigate = useNavigate();
  const { profiles = [], loading, fetchData, dispatch } = context;

  const handleSortAscending = () => {
    dispatch({ type: 'ascending' });
  };

  const handleSortDescending = () => {
    dispatch({ type: 'descending' });
  };

  // navigate to single profile page with profile passed down as state
  const handleCardClick = (profile) => {
    navigate(`/profile/${profile.id}`, { state: { profile } });
  };

  // toggle timer button
  const toggleTimerFunc = () => {
    if (toggleTimer && typeof toggleTimer === 'function') {
      toggleTimer();
    }
  };

  // when count down time reach 0, refetch data
  useEffect(() => {
    if (countDownTime === 0 && fetchData && typeof fetchData === 'function') {
      fetchData();
    }
  }, [countDownTime]);

  return (
    <React.Fragment>
      <Header />
      <MainPage>
        <RightInfoGroup>
          {refreshEnabled && <h3>{`Seconds left before data refetch: ${countDownTime}`}</h3>}
          <StyledButton onClick={toggleTimerFunc}>
            {refreshEnabled ? 'Disable' : 'Enable'} Timer
          </StyledButton>
        </RightInfoGroup>
        <RightInfoGroup>
          <MinimalButton disabled>
            <FilterImg src="filter.svg" alt="filter" />
          </MinimalButton>
          <MinimalButton onClick={handleSortAscending}>
            <FilterImg src="./ascending.svg" alt="Sort ascending" />
          </MinimalButton>
          <MinimalButton onClick={handleSortDescending}>
            <FilterImg src="./descending.svg" alt="Sort descending" />
          </MinimalButton>
        </RightInfoGroup>
        {loading ? (
          <LoadingContainer>
            <ClipLoader color={'blue'} loading={true} size={150} />
          </LoadingContainer>
        ) : (
          <SearchCardContainer>
            {Array.isArray(profiles) &&
              profiles.length > 0 &&
              profiles.map((profile, index) => (
                <div key={`search-card-wrapper-${index}`} onClick={() => handleCardClick(profile)}>
                  <SearchCard
                    key={`search-card-${profile.id}-index`}
                    photoUrl={profile.photoUrl}
                    handle={profile.handle}
                    location={profile.location}
                    age={profile.age}
                    photoCount={profile.photoCount}
                  />
                </div>
              ))}
          </SearchCardContainer>
        )}
      </MainPage>
    </React.Fragment>
  );
}

export default SearchPage;
