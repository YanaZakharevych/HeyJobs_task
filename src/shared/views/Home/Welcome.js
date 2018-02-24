import React  from 'react'
import { Title, SubTitle, SectionHeader } from '../../components/styledComponents';

const Welcome = () => (
    <section>
        <Title>Welcome to Job Fabrik</Title>
        <SubTitle margin="20px 0">
            Are you looking for a Frontend or Backend job? Look no further.
            We have the best offers that you can find in Europe.
        </SubTitle>
        <SectionHeader margin="10px 0">
            Below you can find offers prepared for you
        </SectionHeader>
    </section>
);

export default Welcome;