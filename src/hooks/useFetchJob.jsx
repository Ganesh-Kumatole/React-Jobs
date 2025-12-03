import { useState, useEffect } from 'react';

function useFetchJob(id) {
  // State to store job-details
  const [job, setJob] = useState({});
  const [isFetching, setIsFetching] = useState(true);

  // Job-Details Data fetching
  useEffect(() => {
    if (!id) {
      setIsFetching(false);
      setJob({});
      return;
    }

    const fetchJob = async () => {
      try {
        const response = await fetch(`http://localhost:3000/jobs/${id}`);
        if (!response.ok) throw new Error('Network Request Failed...');
        const data = await response.json();
        setJob(data);
        setIsFetching(false);
      } catch (err) {
        console.error(err.message);
      }
    };

    fetchJob();
  }, [id]);

  return { job, isFetching };
}

export default useFetchJob;
