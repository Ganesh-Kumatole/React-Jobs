import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router';

import Layout from './Layout';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import AddJobPage from './pages/AddJobPage';
import JobDetails from './components/layouts/JobDetails';

const App = () => {
  // Helpers to Add/Update/Delete Job
  async function addJob(newJob) {
    await fetch('http://localhost:3000/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newJob),
    });
  }

  async function deleteJob(id) {
    try {
      const res = await fetch(`http://localhost:3000/jobs/${id}`, {
        method: 'DELETE',
      });
      if (!res.ok) throw new Error('Delete Request Failed...');
    } catch (err) {
      console.error(err.message);
    }
  }

  // Define router & routes
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<HomePage />} />
          <Route path="jobs" element={<JobsPage />} />
          <Route path="add-job" element={<AddJobPage addJob={addJob} />} />
          <Route
            path="jobs/:id"
            element={<JobDetails deleteJob={deleteJob} />}
          />
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
