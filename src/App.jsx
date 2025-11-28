import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router';

import HomePage from './pages/HomePage';
import JobPage from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<HomePage />} />
        <Route path="/jobs" element={<JobPage />} />
        <Route path="/add-jobs" element={<AddJobPage />} />
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
