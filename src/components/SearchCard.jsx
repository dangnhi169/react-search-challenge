import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const FullImg = styled.img`
  width: 100%;
  height: 100%;
`;
const CardShadow = styled.div`
  border: 1px solid lightgray;
  border-radius: 8px;
  box-shadow: 0 3px 6px lightgray, 0 3px 6px;
  overflow: hidden;
`;
const AvatarContainer = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
`;
const ContentContainer = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  border-radius: inherit;
  overflow: hidden;
`;
const CardContainer = styled.div`
  margin: 8px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  position: relative;
`;
const Card = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const CardHeaderWrapper = styled.h6`
  font-size: 16px;
`;
const CardHeader = styled.div`
  display: flex;
  margin-bottom: 4px;
  align-items: center;
`;
const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;
const LeftInfoWrapper = styled.div`
  display: flex;
  margin-bottom: 4px;
  align-items: center;
`;
const RightInfoWrapper = styled.div`
  display: inline-block;
  height: 15px;
`;
const CountSpacing = styled.div`
  margin-right: 4px;
`;

export default class Search extends React.PureComponent {
  render() {
    const { photoUrl = '', handle = '', location = '', age = 99, photoCount = 0 } = this.props;

    return (
      <CardWrapper>
        <CardShadow>
          <AvatarContainer>
            <div>
              <FullImg src={photoUrl} alt="potential date"></FullImg>
            </div>
            <ContentContainer>
              <CardContainer>
                <Card>
                  <CardHeaderWrapper>
                    <CardHeader>{handle}</CardHeader>
                  </CardHeaderWrapper>
                  <InfoWrapper>
                    <LeftInfoWrapper>
                      <span>{location ? `${age} • ${location}` : age}</span>
                    </LeftInfoWrapper>
                    <RightInfoWrapper>
                      {photoCount > 1 && (
                        <CountSpacing>
                          <span>{photoCount}</span>
                        </CountSpacing>
                      )}
                    </RightInfoWrapper>
                  </InfoWrapper>
                </Card>
              </CardContainer>
            </ContentContainer>
          </AvatarContainer>
        </CardShadow>
      </CardWrapper>
    );
  }
}
