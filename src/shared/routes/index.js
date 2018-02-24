import Home from '../views/Home'
import Details from '../views/Details';

import { fetchJobs, fetchJob } from '../redux/actions';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
    reduxAction: () => fetchJobs,
  },
  {
    path: '/job/:slug',
    component: Details,
    reduxAction: (path = '') => fetchJob.bind(null, path.split('/').pop()),
  }
];

export default routes