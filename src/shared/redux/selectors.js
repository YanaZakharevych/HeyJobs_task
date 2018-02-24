import { createSelector } from 'reselect'

export const jobsSelector = state => state.get('JOBS');

export const jobsDataSelector = createSelector(
    jobsSelector,
    state => state.get('DATA'),
);

export const jobsStatusSelector = createSelector(
    jobsSelector,
    state => state.get('STATUS'),
);

export const jobSelector = state => state.get('JOB');

export const jobDataSelector = createSelector(
    jobSelector,
    state => state.get('DATA'),
);

export const jobStatusSelector = createSelector(
    jobSelector,
    state => state.get('STATUS'),
);

