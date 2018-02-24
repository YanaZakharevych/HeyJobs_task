import { ACTION_TYPES } from './actionsTypes';
import fetch from 'isomorphic-fetch'

export const fetchJobs = () => {
    return dispatch => dispatch({
        type: ACTION_TYPES.FETCH_JOBS,
        payload: fetch('http://localhost:3333/api/jobs')
            .then((data) => data.json())
            .then((repos) => repos.data)
    });
};

export const fetchJob = (slug) => {
    return dispatch => dispatch({
        type: ACTION_TYPES.FETCH_JOB,
        payload: fetch(`http://localhost:3333/api/jobs/${slug}`)
            .then((data) => data.json())
    })
};
