import React, { Component } from 'react'
import { isEmpty } from 'lodash';
import ChevronLeft from 'material-ui/svg-icons/navigation/chevron-left';
import { NavLink } from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton';

import { connect } from 'react-redux'
import { jobDataSelector, jobStatusSelector} from '../../redux/selectors';
import { fetchJob } from '../../redux/actions';

import { OfferDetails } from './OfferDetails';
import { getHelmet } from '../prepareMetadata';
import { ContentWrapper, SubContentWrapper } from '../../components/styledComponents';


const mapDispatchToProps = dispatch => ({
    fetchAction: (slug) => dispatch(fetchJob(slug))
});

const mapStateToProps = state => ({
    job: jobDataSelector(state).toJS(),
    status: jobStatusSelector(state),
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
            },
        };

        let content = <div />;
        if (status === 'FULFILLED' && !isEmpty(job)) {
            seo.title = `Jobs Fabrik | ${job.title} ${job.company}`;
            seo.description += `${job.title} ${job.company}`;
            seo.meta.keywords += [job.title, job.company].join(',');

            content = OfferDetails(job);
        } else if (status === 'REJECTED' || isEmpty(job)) {
            content = (
                <label>
                    Sorry there was an error! Please try again or go back to the home page.
                </label>
            );
        }

        return (
            <ContentWrapper>
                {getHelmet(seo)}
                <NavLink to={'/'} >
                    <RaisedButton label="Back" icon={<ChevronLeft/>} />
                </NavLink>
                <SubContentWrapper>
                    {content}
                </SubContentWrapper>
            </ContentWrapper>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Details)
