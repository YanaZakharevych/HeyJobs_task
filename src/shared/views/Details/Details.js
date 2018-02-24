import React, { Component } from 'react'
import { createSelector } from 'reselect'
import { connect } from 'react-redux'
import { isEmpty } from 'lodash';
import ChevronLeft from 'material-ui/svg-icons/navigation/chevron-left';
import { NavLink } from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton';
import { fetchJob } from '../../redux/actions';
import {
    CompanyDetails,
    CompanyName,
    Date,
    Description,
    DetailsWrapper,
    JobWraper,
    Link,
    Location,
    Title,
    JobDetails,
    SectionTitle,
} from './styledComponents';
import { getHelmet } from '../prepareMetadata';

const mapDispatchToProps = dispatch => ({
    fetchAction: (slug) => dispatch(fetchJob(slug))
});

const mapStateToProps = state => ({
    job: state.getIn(['JOB', 'DATA']).toJS(),
    status: state.getIn(['JOB', 'STATUS']),
});

class Details extends Component {
    componentDidMount() {
        if (__isBrowser__) {
            const { slug } = this.props.match.params;

            if (isEmpty(this.props.job) || this.props.job.slug !== slug) {

                this.props.fetchAction(slug);
            }
        }
    }

    render() {
        const { job, status } = this.props;

        const seo = {
            title: 'Jobs Fabrik | Job offer details',
            description: 'Detailed information about the job offer',
            canonical: `http://localhost:3333/${this.props.match.url}`,
            meta: {
                charset: 'UTF-8',
                keywords: 'jobs,jobsfabrik',
            }
        };

        let content = <div />;
        if (status === 'FULFILLED' && !isEmpty(job)) {
            seo.title = `Jobs Fabrik | ${job.title} ${job.company}`;
            seo.description += `${job.title} ${job.company}`;
            seo.meta.keywords += [job.title, job.company].join(',');

            content = (
                <div>
                    <Title>
                        {job.title}
                    </Title>
                    <Location>
                        {job.location} - {job.type}
                    </Location>
                    <Date>
                        Job offer appeared on {job.date}
                    </Date>
                    <Description>
                        <a href={`mailto:example@${job.company}.com?subject=${job.title} offer`}>
                            <RaisedButton label="Apply" primary={true}/>
                        </a>
                        <SectionTitle>Company details</SectionTitle>
                        <JobDetails>
                            <CompanyName>{job.company}</CompanyName>
                            <CompanyDetails>
                                Learn more about the company on the website
                                <Link href="#!" target="_blank">www.{job.company}.com</Link>
                            </CompanyDetails>
                        </JobDetails>

                        <SectionTitle>Job brief</SectionTitle>
                        <JobDetails>
                            {job.brief}
                        </JobDetails>

                        <SectionTitle>Responsibilities</SectionTitle>
                        <JobDetails>
                            <ul>
                                {job.responsibilities.map((r, index) => <li key={index}>{r}</li>)}
                            </ul>
                        </JobDetails>

                        <SectionTitle>Requirements</SectionTitle>
                        <JobDetails>
                            <ul>
                                {job.requirements.map((r, index) => <li key={index}>{r}</li>)}
                            </ul>
                        </JobDetails>
                    </Description>
                </div>
            );
        } else if (status === 'REJECTED' || isEmpty(job)) {
            content = (
                <label>
                    Sorry there was an error! Please try again or go back to the home page.
                </label>
            );
        }

        return (
            <DetailsWrapper>
                {getHelmet(seo)}
                <NavLink to={'/'} >
                    <RaisedButton label="Back" icon={<ChevronLeft/>} />
                </NavLink>
                <JobWraper>
                    {content}
                </JobWraper>
            </DetailsWrapper>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Details)
