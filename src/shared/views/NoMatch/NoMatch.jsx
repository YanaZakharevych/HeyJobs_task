import React from 'react'
import { NavLink } from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton';

import { Title, CenteredWrapper } from '../../components/styledComponents';
import { getHelmet } from '../prepareMetadata';

export default function NoMatch () {
    const seo = {
        title: 'Jobs Fabrik | Page not found',
        description: 'Jobs Fabrik - page not found',
        meta: {
            charset: 'UTF-8',
            keywords: 'jobs,jobsfabrik',
        },
    };

    return (
    <CenteredWrapper>
        {getHelmet(seo)}
        <Title>
          404
        </Title>
        <p>Sorry, this url is not pointing anywhere</p>
        <NavLink to={'/'} >
            <RaisedButton label="Go back to homepage" />
        </NavLink>
    </CenteredWrapper>
  )
}