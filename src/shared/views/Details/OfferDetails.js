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
        <SubTitle margin="15px 0">
            {job.location} - {job.type}
        </SubTitle>
        <SuplementaryText margin="20px 0">
            Job offer appeared on {job.date}
        </SuplementaryText>
        <TextSection>
            <a href={`mailto:example@${job.company}.com?subject=${job.title} offer`}>
                <RaisedButton icon={<Email/>} label="Apply" primary={true}/>
            </a>
            <SectionHeader margin="10px 0">Company details</SectionHeader>
            <Paragraph margin="0 0 15px">
                <Strong margin="0 15px 0 0">{job.company}</Strong>
                <SuplementaryText display="inline-block">
                    Learn more about the company on the website
                    <Link href="#!" target="_blank" margin="0 0 0 15px">www.{job.company}.com</Link>
                </SuplementaryText>
            </Paragraph>

            <SectionHeader margin="10px 0">Job brief</SectionHeader>
            <Paragraph margin="0 0 20px">
                {job.brief}
            </Paragraph>

            <SectionHeader margin="10px 0">Responsibilities</SectionHeader>
            <Paragraph margin="0 0 20px">
                <ul>
                    {job.responsibilities.map((r, index) => <li key={index}>{r}</li>)}
                </ul>
            </Paragraph>

            <SectionHeader margin="10px 0">Requirements</SectionHeader>
            <Paragraph margin="0 0 20px">
                <ul>
                    {job.requirements.map((r, index) => <li key={index}>{r}</li>)}
                </ul>
            </Paragraph>
        </TextSection>
    </div>
);
