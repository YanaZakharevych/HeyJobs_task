import React from 'react'
import styled from 'styled-components';
import { getHelmet } from '../prepareMetadata';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 20px;
  flex-flow: column;
`;

const Title = styled.label`
  font-size: 32px;
  font-weight: 500;
`;

export default function NoMatch () {
    const seo = {
        title: 'Jobs Fabrik | Page not found',
        description: 'Jobs Fabrik - page not found',
        meta: {
            charset: 'UTF-8',
            name: {
                keywords: 'jobs,jobsfabrik'
            }
        }
    };

    return (
    <Wrapper>
        {getHelmet(seo)}
        <Title>
          404
        </Title>
        <p>Sorry, this url is not pointing anywhere</p>
    </Wrapper>
  )
}