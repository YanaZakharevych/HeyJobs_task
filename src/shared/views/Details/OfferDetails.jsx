import React  from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import Email from 'material-ui/svg-icons/communication/mail-outline';
import {
    Title,
    SubTitle,
    SuplementaryText,
    TextSection,
    SectionHeader,
    Paragraph,
    Strong,
    Link,
} from '../../components/styledComponents';


export const OfferDetails = (job) => (
    <div>
        <Title>
            {job.title}
        </Title>
        <SubTitle>
            {job.location} - {job.type}
        </SubTitle>
        <SuplementaryText margin="10x 0" display="block">
            Job offer appeared on {job.date}
        </SuplementaryText>
        <TextSection>
            <a href={`mailto:example@${job.company}.com?subject=${job.title} offer`}>
                <RaisedButton icon={<Email/>} label="Apply" primary={true}/>
            </a>
            <SectionHeader>Company details</SectionHeader>
            <Paragraph>
                <Strong>{job.company}</Strong>
                <SuplementaryText display="inline-block" margin="0 10px">
                    Learn more about the company on the website: <Link href="#!" target="_blank">www.{job.company}.com</Link>
                </SuplementaryText>
            </Paragraph>

            <SectionHeader>Job brief</SectionHeader>
            <Paragraph>
                {job.brief}
            </Paragraph>

            <SectionHeader>Responsibilities</SectionHeader>
            <Paragraph>
                <ul>
                    {job.responsibilities.map((r, index) => <li key={index}>{r}</li>)}
                </ul>
            </Paragraph>

            <SectionHeader>Requirements</SectionHeader>
            <Paragraph>
                <ul>
                    {job.requirements.map((r, index) => <li key={index}>{r}</li>)}
                </ul>
            </Paragraph>
        </TextSection>
    </div>
);
