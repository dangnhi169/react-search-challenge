import React from 'react';
import { useLocation, Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import StyledButton from './StyledButton';
import Header from './Header';

const GridContainer = styled.div`
  display: grid;
`;
const CenterElement = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledImg = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
`;

function ProfilePage(props) {
  const location = useLocation();
  const { profile } = location.state;
  return (
    <React.Fragment>
      <Header />
      <GridContainer>
        <StyledButton>
          <Link to="/">Go back to Dashboard</Link>
        </StyledButton>
        <CenterElement>
          <StyledImg src={profile.photoUrl} alt="potential date"></StyledImg>
        </CenterElement>
        <CenterElement>
          <h1> {profile.handle} </h1>
        </CenterElement>
        <CenterElement>
          <h1> {profile.age} </h1>
        </CenterElement>
        <CenterElement>
          <h1> {profile.location} </h1>
        </CenterElement>
        <Outlet />
      </GridContainer>
    </React.Fragment>
  );
}

export default ProfilePage;
