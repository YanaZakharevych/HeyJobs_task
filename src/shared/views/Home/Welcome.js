import React  from 'react'
import styled from 'styled-components';

const WelcomeWrapper = styled.section`
    margin: 20px 5px;
`;

const Title = styled.h1`
    font-size: 40px;
`;

const Description = styled.h3`
    font-size: 20px;
    color: rgba(0, 0, 0, 0.54);
`;

const CTA = styled.h3`
    font-size: 25px;
`;

const Welcome = () => (
    <WelcomeWrapper>
        <Title>Welcome to Job Fabrik</Title>
        <Description>
            Are you looking for a Frontend or Backend job? Look no further.
            We have the best offers that you can find in Europe.
        </Description>
        <CTA>
            Below you can find offers prepared for you
        </CTA>
    </WelcomeWrapper>
);

export default Welcome;