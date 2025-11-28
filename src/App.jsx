import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router';

import Layout from './Layout';
import HomePage from './pages/HomePage';
import JobPage from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';
import JobDetails from './components/layouts/JobDetails';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<HomePage />} />
          <Route path="jobs" element={<JobPage />} />
          <Route path="add-job" element={<AddJobPage />} />
          <Route path="job/:id" element={<JobDetails />} />
        </Route>
      </>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
