import { REQUEST_STATUS } from './statuses';
import { fromJS } from 'immutable';
import { ACTION_TYPES } from './actionsTypes';

export const STATE_CONSTS = {
    JOBS: 'JOBS',
    JOB: 'JOB',
    STATUS: 'STATUS',
    DATA: 'DATA',
};

export const initialState = fromJS({
    [STATE_CONSTS.JOBS]: {
        [STATE_CONSTS.STATUS]: REQUEST_STATUS.NOT_FETCHED,
        [STATE_CONSTS.DATA]: [],
    },
    [STATE_CONSTS.JOB]: {
        [STATE_CONSTS.STATUS]: REQUEST_STATUS.NOT_FETCHED,
        [STATE_CONSTS.DATA]: {},
    },
});

export const reducer = (state = initialState, action) => {
    const { JOBS, JOB, DATA, STATUS } = STATE_CONSTS;
    const { FULFILLED, PENDING, REJECTED } = REQUEST_STATUS;

    let successState, failureState;

    switch (action.type) {
        case ACTION_TYPES.FETCH_JOBS_PENDING:
            return state.setIn([JOBS, STATUS], PENDING);

        case ACTION_TYPES.FETCH_JOBS_FULFILLED:
            successState = state.setIn([JOBS, STATUS], FULFILLED);
            return successState.setIn([JOBS, DATA], fromJS(action.payload));

        case ACTION_TYPES.FETCH_JOBS_REJECTED:
            failureState = state.setIn([JOBS, STATUS], REJECTED);
            return failureState.setIn([JOBS, DATA], fromJS(action.payload));

        case ACTION_TYPES.FETCH_JOB_PENDING:
            return state.setIn([JOB, STATUS], PENDING);

        case ACTION_TYPES.FETCH_JOB_FULFILLED:
            successState = state.setIn([JOB, STATUS], FULFILLED);
            return successState.setIn([JOB, DATA], fromJS(action.payload));

        case ACTION_TYPES.FETCH_JOB_REJECTED:
            failureState = state.setIn([JOB, STATUS], REJECTED);
            return failureState.setIn([JOB, DATA], fromJS(action.payload));

        default:
            return state
    }
};