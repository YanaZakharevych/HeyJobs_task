import React, { Component } from 'react'
import { connect } from 'react-redux'
import { isEmpty } from 'lodash';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import { NavLink } from 'react-router-dom'
import styled from 'styled-components';
import Welcome from './Welcome';
import { getHelmet } from '../prepareMetadata';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';
import Domain from 'material-ui/svg-icons/social/domain';
import LocationOn from 'material-ui/svg-icons/communication/location-on';

import { fetchJobs } from '../../redux/actions';

const mapDispatchToProps = dispatch => ({
    fetchAction: () => dispatch(fetchJobs())
});

const mapStateToProps = state => ({
    jobs: state.getIn(['JOBS', 'DATA']).toJS(),
    status: state.getIn(['JOBS', 'STATUS']),
});

const Title = styled.strong`
  text-transform: capitalize;
`;

const iconDomainStyle = {
    color: 'rgba(0, 0, 0, 0.54)',
    position: 'relative',
    top: '5px',
};

const iconLocationStyle = {
    marginLeft: '5px',
    color: 'rgba(0, 0, 0, 0.54)',
    position: 'relative',
    top: '5px',
};

class Home extends Component {
    componentDidMount() {
        if (__isBrowser__) {
            if (isEmpty(this.props.jobs)) {
                this.props.fetchAction();
            }
        }
    }

    render() {
        const { jobs, status } = this.props;

        const seo = {
            title: 'Jobs Fabrik | Jobs offers list',
            description: 'Jobs Fabrik - page with the best job offers',
            canonical: `http://localhost:3333/${this.props.match.url}`,
            meta: {
                charset: 'UTF-8',
                keywords: 'jobs,jobsfabrik,jobs offers',
            }
        };

        let content = <div />;
        if (status === 'FULFILLED' && !isEmpty(jobs)) {
            content = (
                <List>
                    { jobs.map((job, index) => (
                        <NavLink to={`/job/${job.slug}`} style={{ textDecoration: 'none' }} key={job.slug}>
                            <ListItem
                                primaryText={job.title}
                                leftAvatar={<Avatar src={`https://placeimg.com/${50+index}/${50+index}/animals`} />}
                                rightIcon={<ChevronRight />}
                                secondaryText={(
                                <span>
                                    <Title><Domain style={iconDomainStyle}/> {job.company}</Title>
                                    <LocationOn style={iconLocationStyle} />{job.location}
                                </span>
                                )}
                            />
                        </NavLink>
                    )) }
                </List>
            );
        } else if (status === 'REJECTED' || isEmpty(jobs)) {
            content = <label>Sorry there was an error during jobs fetching. Please try again.</label>;
        }

        return (
            <main>
                {getHelmet(seo)}
                <Welcome />
                <section>
                    <span>Click on an offer to see details</span>
                    {content}
                </section>
            </main>
        )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
